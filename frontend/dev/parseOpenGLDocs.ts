// https://registry.khronos.org/OpenGL-Refpages/es3.0/

let parser = new DOMParser();

let funcs = document
  .getElementById("containerul")
  .innerText.split("\n")
  .slice(2)
  .filter(e => e.length > 1 && !/^gl[A-Z]/.test(e));

let failedList = [];

let defs = await Promise.all(
  funcs.map(f => {
    return fetch(`https://registry.khronos.org/OpenGL-Refpages/es3.0/html/${f}.xhtml`)
      .then(resp => resp.text())
      .then(html => {
        let doc = parser.parseFromString(html, "application/xhtml+xml");

        let functionDeclarations = doc.querySelectorAll(".funcsynopsis table");

        let varDeclaration = doc.querySelector(".fieldsynopsis");

        // @todo {argName: argDesc}, parse declarations to get arg name
        // or just bundle arg descs and figure the rest on the fly?
        // remove semi only for vars

        return [
          f,
          {
            desc: doc.querySelector(".refnamediv p").innerText,
            decl: [
              varDeclaration
                ? varDeclaration.innerText.replace(";", "").trim().replace(/\s+/g, " ")
                : [...functionDeclarations].map(e =>
                    e.innerText
                      .trim()
                      .replace(/\s+/g, " ")
                      .replaceAll("( ", "(")
                      .replaceAll(" )", ")")
                      .replaceAll(" ,", ",")
                  ),
            ].flat(),
            ...(() => {
              if (varDeclaration) {
                return {};
              }

              let pt = [...doc.querySelectorAll("dl.variablelist dt")].map(
                e => e.innerText.trim().replace(/\s+/g, " ").split(" ").pop() // modf "out i"
              );
              let pd = [...doc.querySelectorAll("dl.variablelist dd")].map(e =>
                e.innerText.trim().replace(/\s+/g, " ")
              );
              let pe = Object.fromEntries(pt.map((t, i) => [t, pd[i]]));
              return { params: pe };
            })(),
          },
        ];
      })
      .catch(e => {
        failedList.push(f);
        return [f, null];
      });
  })
);

let defsObj = Object.fromEntries(defs);

defsObj["dFdy"] = { ...defsObj["dFdx"] };
defsObj["dFdy"].decl = defsObj["dFdy"].decl.slice(1);
defsObj["dFdx"].decl.splice(1, 1);

/////

defsObj["floatBitsToUint"] = { ...defsObj["floatBitsToInt"] };
defsObj["floatBitsToUint"].desc = defsObj["floatBitsToUint"].desc.replace(
  "floatBitsToInt",
  "floatBitsToInt, floatBitsToUint"
);
defsObj["floatBitsToUint"].decl = defsObj["floatBitsToUint"].decl.slice(1);
defsObj["floatBitsToInt"].decl.splice(1, 1);

/////

defsObj["uintBitsToFloat"] = { ...defsObj["intBitsToFloat"] };
// defsObj["uintBitsToFloat"].desc = defsObj["uintBitsToFloat"].desc.replace(
//   "intBitsToFloat",
//   "uintBitsToFloat"
// );
defsObj["uintBitsToFloat"].decl = defsObj["uintBitsToFloat"].decl.slice(1);
defsObj["intBitsToFloat"].decl.splice(1, 1);

/////

defsObj["packUnorm2x16"] = { ...defsObj["packUnorm"] };
defsObj["packSnorm2x16"] = { ...defsObj["packUnorm"] };
defsObj["packUnorm2x16"].decl = [defsObj["packUnorm"].decl[0]];
defsObj["packSnorm2x16"].decl = [defsObj["packUnorm"].decl[1]];
delete defsObj["packUnorm"];

/////

defsObj["unpackUnorm2x16"] = { ...defsObj["unpackUnorm"] };
defsObj["unpackSnorm2x16"] = { ...defsObj["unpackUnorm"] };
defsObj["unpackUnorm2x16"].decl = [defsObj["unpackUnorm"].decl[0]];
defsObj["unpackSnorm2x16"].decl = [defsObj["unpackUnorm"].decl[1]];
delete defsObj["unpackUnorm"];

console.log("ready!");

// prettier-ignore
copy([
  '// autogenerated, do not edit directly',
  'export default',
  JSON.stringify(defsObj, null, 4),
].join('\n'));