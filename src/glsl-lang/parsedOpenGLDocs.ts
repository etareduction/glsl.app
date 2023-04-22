// autogenerated, do not edit directly
export default {
  abs: {
    desc: "abs — return the absolute value of the parameter",
    decl: ["genType abs(genType x);", "genIType abs(genIType x);"],
    params: {
      x: "Specify the value of which to return the absolute.",
    },
  },
  acos: {
    desc: "acos — return the arccosine of the parameter",
    decl: ["genType acos(genType x);"],
    params: {
      x: "Specify the value whose arccosine to return.",
    },
  },
  acosh: {
    desc: "acosh — return the arc hyperbolic cosine of the parameter",
    decl: ["genType acosh(genType x);"],
    params: {
      x: "Specify the value whose arc hyperbolic cosine to return.",
    },
  },
  all: {
    desc: "all — check whether all elements of a boolean vector are true",
    decl: ["bool all(bvec x);"],
    params: {
      x: "Specifies the vector to be tested for truth.",
    },
  },
  any: {
    desc: "any — check whether any element of a boolean vector is true",
    decl: ["bool any(bvec x);"],
    params: {
      x: "Specifies the vector to be tested for truth.",
    },
  },
  asin: {
    desc: "asin — return the arcsine of the parameter",
    decl: ["genType asin(genType x);"],
    params: {
      x: "Specify the value whose arcsine to return.",
    },
  },
  asinh: {
    desc: "asinh — return the arc hyperbolic sine of the parameter",
    decl: ["genType asinh(genType x);"],
    params: {
      x: "Specify the value whose arc hyperbolic sine to return.",
    },
  },
  atan: {
    desc: "atan — return the arc-tangent of the parameters",
    decl: ["genType atan(genType y, genType x);", "genType atan(genType y_over_x);"],
    params: {
      y: "Specify the numerator of the fraction whose arctangent to return.",
      x: "Specify the denominator of the fraction whose arctangent to return.",
      y_over_x: "Specify the fraction whose arctangent to return.",
    },
  },
  atanh: {
    desc: "atanh — return the arc hyperbolic tangent of the parameter",
    decl: ["genType atanh(genType x);"],
    params: {
      x: "Specify the value whose arc hyperbolic tangent to return.",
    },
  },
  ceil: {
    desc: "ceil — find the nearest integer that is greater than or equal to the parameter",
    decl: ["genType ceil(genType x);"],
    params: {
      x: "Specify the value to evaluate.",
    },
  },
  clamp: {
    desc: "clamp — constrain a value to lie between two further values",
    decl: [
      "genType clamp(genType x, genType minVal, genType maxVal);",
      "genType clamp(genType x, float minVal, float maxVal);",
      "genIType clamp(genIType x, genIType minVal, genIType maxVal);",
      "genIType clamp(genIType x, int minVal, int maxVal);",
      "genUType clamp(genUType x, genUType minVal, genUType maxVal);",
      "genUType clamp(genUType x, uint minVal, uint maxVal);",
    ],
    params: {
      x: "Specify the value to constrain.",
      minVal: "Specify the lower end of the range into which to constrain x.",
      maxVal: "Specify the upper end of the range into which to constrain x.",
    },
  },
  cos: {
    desc: "cos — return the cosine of the parameter",
    decl: ["genType cos(genType angle);"],
    params: {
      angle: "Specify the quantity, in radians, of which to return the cosine.",
    },
  },
  cosh: {
    desc: "cosh — return the hyperbolic cosine of the parameter",
    decl: ["genType cosh(genType x);"],
    params: {
      x: "Specify the value whose hyperbolic cosine to return.",
    },
  },
  cross: {
    desc: "cross — calculate the cross product of two vectors",
    decl: ["vec3 cross(vec3 x, vec3 y);"],
    params: {
      x: "Specifies the first of two vectors",
      y: "Specifies the second of two vectors",
    },
  },
  degrees: {
    desc: "degrees — convert a quantity in radians to degrees",
    decl: ["genType degrees(genType radians);"],
    params: {
      radians: "Specify the quantity, in radians, to be converted to degrees.",
    },
  },
  determinant: {
    desc: "determinant — calculate the determinant of a matrix",
    decl: [
      "float determinant(mat2 m);",
      "float determinant(mat3 m);",
      "float determinant(mat4 m);",
    ],
    params: {
      m: "Specifies the matrix of which to take the determinant.",
    },
  },
  dFdx: {
    desc: "dFdx, dFdy — return the partial derivative of an argument with respect to x or y",
    decl: ["genType dFdx(genType p);"],
    params: {
      p: "Specifies the expression of which to take the partial derivative.",
    },
  },
  dFdy: {
    desc: "dFdx, dFdy — return the partial derivative of an argument with respect to x or y",
    decl: ["genType dFdy(genType p);"],
    params: {
      p: "Specifies the expression of which to take the partial derivative.",
    },
  },
  distance: {
    desc: "distance — calculate the distance between two points",
    decl: ["float distance(genType p0, genType p1);"],
    params: {
      p0: "Specifies the first of two points",
      p1: "Specifies the second of two points",
    },
  },
  dot: {
    desc: "dot — calculate the dot product of two vectors",
    decl: ["float dot(genType x, genType y);"],
    params: {
      x: "Specifies the first of two vectors",
      y: "Specifies the second of two vectors",
    },
  },
  equal: {
    desc: "equal — perform a component-wise equal-to comparison of two vectors",
    decl: [
      "bvec equal(vec x, vec y);",
      "bvec equal(bvec x, bvec y);",
      "bvec equal(ivec x, ivec y);",
      "bvec equal(uvec x, uvec y);",
    ],
    params: {
      x: "Specifies the first vector to be used in the comparison operation.",
      y: "Specifies the second vector to be used in the comparison operation.",
    },
  },
  exp: {
    desc: "exp — return the natural exponentiation of the parameter",
    decl: ["genType exp(genType x);"],
    params: {
      x: "Specify the value to exponentiate.",
    },
  },
  exp2: {
    desc: "exp2 — return 2 raised to the power of the parameter",
    decl: ["genType exp2(genType x);"],
    params: {
      x: "Specify the value of the power to which 2 will be raised.",
    },
  },
  faceforward: {
    desc: "faceforward — return a vector pointing in the same direction as another",
    decl: ["genType faceforward(genType N, genType I, genType Nref);"],
    params: {
      N: "Specifies the vector to orient.",
      I: "Specifies the incident vector.",
      Nref: "Specifies the reference vector.",
    },
  },
  floatBitsToInt: {
    desc: "floatBitsToInt — produce the encoding of a floating point value as an integer",
    decl: ["genIType floatBitsToInt(genType x);"],
    params: {
      x: "Specifies the value whose floating point encoding to return.",
    },
  },
  floatBitsToUint: {
    desc: "floatBitsToInt, floatBitsToUint — produce the encoding of a floating point value as an integer",
    decl: ["genUType floatBitsToUint(genType x);"],
    params: {
      x: "Specifies the value whose floating point encoding to return.",
    },
  },
  floor: {
    desc: "floor — find the nearest integer less than or equal to the parameter",
    decl: ["genType floor(genType x);"],
    params: {
      x: "Specify the value to evaluate.",
    },
  },
  fract: {
    desc: "fract — compute the fractional part of the argument",
    decl: ["genType fract(genType x);"],
    params: {
      x: "Specify the value to evaluate.",
    },
  },
  fwidth: {
    desc: "fwidth — return the sum of the absolute derivatives in x and y",
    decl: ["genType fwidth(genType p);"],
    params: {
      p: "Specifies the expression of which to take the partial derivative.",
    },
  },
  gl_FragCoord: {
    desc: "gl_FragCoord — contains the window-relative coordinates of the current fragment",
    decl: ["in highp vec4 gl_FragCoord"],
  },
  gl_FragDepth: {
    desc: "gl_FragDepth — establishes a depth value for the current fragment",
    decl: ["out highp float gl_FragDepth"],
  },
  gl_FrontFacing: {
    desc: "gl_FrontFacing — indicates whether a primitive is front or back facing",
    decl: ["in bool gl_FrontFacing"],
  },
  gl_InstanceID: {
    desc: "gl_InstanceID — contains the instance number of the current primitive in an instanced draw command",
    decl: ["in highp int gl_InstanceID"],
  },
  gl_PointCoord: {
    desc: "gl_PointCoord — contains the coordinate of a fragment within a point",
    decl: ["in mediump vec2 gl_PointCoord"],
  },
  gl_PointSize: {
    desc: "gl_PointSize — contains size of rasterized points, in pixels",
    decl: ["out highp float gl_PointSize"],
  },
  gl_Position: {
    desc: "gl_Position — contains the position of the current vertex",
    decl: ["out highp vec4 gl_Position"],
  },
  gl_VertexID: {
    desc: "gl_VertexID — contains the index of the current vertex",
    decl: ["in highp int gl_VertexID"],
  },
  greaterThan: {
    desc: "greaterThan — perform a component-wise greater-than comparison of two vectors",
    decl: [
      "bvec greaterThan(vec x, vec y);",
      "bvec greaterThan(ivec x, ivec y);",
      "bvec greaterThan(uvec x, uvec y);",
    ],
    params: {
      x: "Specifies the first vector to be used in the comparison operation.",
      y: "Specifies the second vector to be used in the comparison operation.",
    },
  },
  greaterThanEqual: {
    desc: "greaterThanEqual — perform a component-wise greater-than-or-equal comparison of two vectors",
    decl: [
      "bvec greaterThanEqual(vec x, vec y);",
      "bvec greaterThanEqual(ivec x, ivec y);",
      "bvec greaterThanEqual(uvec x, uvec y);",
    ],
    params: {
      x: "Specifies the first vector to be used in the comparison operation.",
      y: "Specifies the second vector to be used in the comparison operation.",
    },
  },
  intBitsToFloat: {
    desc: "intBitsToFloat, uintBitsToFloat — produce a floating point using an encoding supplied as an integer",
    decl: ["genType intBitsToFloat(genIType x);"],
    params: {
      x: "Specifies the bit encoding to return as a floating point value.",
    },
  },
  inverse: {
    desc: "inverse — calculate the inverse of a matrix",
    decl: ["mat2 inverse(mat2 m);", "mat3 inverse(mat3 m);", "mat4 inverse(mat4 m);"],
    params: {
      m: "Specifies the matrix of which to take the inverse.",
    },
  },
  inversesqrt: {
    desc: "inversesqrt — return the inverse of the square root of the parameter",
    decl: ["genType inversesqrt(genType x);"],
    params: {
      x: "Specify the value of which to take the inverse of the square root.",
    },
  },
  isinf: {
    desc: "isinf — determine whether the parameter is positive or negative infinity",
    decl: ["genBType isinf(genType x);"],
    params: {
      x: "Specifies the value to test for infinity.",
    },
  },
  isnan: {
    desc: "isnan — determine whether the parameter is a number",
    decl: ["genBType isnan(genType x);"],
    params: {
      x: "Specifies the value to test for NaN.",
    },
  },
  length: {
    desc: "length — calculate the length of a vector",
    decl: ["float length(genType x);"],
    params: {
      x: "Specifies a vector of which to calculate the length.",
    },
  },
  lessThan: {
    desc: "lessThan — perform a component-wise less-than comparison of two vectors",
    decl: [
      "bvec lessThan(vec x, vec y);",
      "bvec lessThan(ivec x, ivec y);",
      "bvec lessThan(uvec x, uvec y);",
    ],
    params: {
      x: "Specifies the first vector to be used in the comparison operation.",
      y: "Specifies the second vector to be used in the comparison operation.",
    },
  },
  lessThanEqual: {
    desc: "lessThanEqual — perform a component-wise less-than-or-equal comparison of two vectors",
    decl: [
      "bvec lessThanEqual(vec x, vec y);",
      "bvec lessThanEqual(ivec x, ivec y);",
      "bvec lessThanEqual(uvec x, uvec y);",
    ],
    params: {
      x: "Specifies the first vector to be used in the comparison operation.",
      y: "Specifies the second vector to be used in the comparison operation.",
    },
  },
  log: {
    desc: "log — return the natural logarithm of the parameter",
    decl: ["genType log(genType x);"],
    params: {
      x: "Specify the value of which to take the natural logarithm.",
    },
  },
  log2: {
    desc: "log2 — return the base 2 logarithm of the parameter",
    decl: ["genType log2(genType x);"],
    params: {
      x: "Specify the value of which to take the base 2 logarithm.",
    },
  },
  matrixCompMult: {
    desc: "matrixCompMult — perform a component-wise multiplication of two matrices",
    decl: ["mat matrixCompMult(mat x, mat y);"],
    params: {
      x: "Specifies the first matrix multiplicand.",
      y: "Specifies the second matrix multiplicand.",
    },
  },
  max: {
    desc: "max — return the greater of two values",
    decl: [
      "genType max(genType x, genType y);",
      "genType max(genType x, float y);",
      "genIType max(genIType x, genIType y);",
      "genIType max(genIType x, int y);",
      "genUType max(genUType x, genUType y);",
      "genUType max(genUType x, uint y);",
    ],
    params: {
      x: "Specify the first value to compare.",
      y: "Specify the second value to compare.",
    },
  },
  min: {
    desc: "min — return the lesser of two values",
    decl: [
      "genType min(genType x, genType y);",
      "genType min(genType x, float y);",
      "genIType min(genIType x, genIType y);",
      "genIType min(genIType x, int y);",
      "genUType min(genUType x, genUType y);",
      "genUType min(genUType x, uint y);",
    ],
    params: {
      x: "Specify the first value to compare.",
      y: "Specify the second value to compare.",
    },
  },
  mix: {
    desc: "mix — linearly interpolate between two values",
    decl: [
      "genType mix(genType x, genType y, genType a);",
      "genType mix(genType x, genType y, float a);",
      "genType mix(genType x, genType y, genBType a);",
    ],
    params: {
      x: "Specify the start of the range in which to interpolate.",
      y: "Specify the end of the range in which to interpolate.",
      a: "Specify the value to use to interpolate between x and y.",
    },
  },
  mod: {
    desc: "mod — compute value of one parameter modulo another",
    decl: ["genType mod(genType x, float y);", "genType mod(genType x, genType y);"],
    params: {
      x: "Specify the value to evaluate.",
      y: "Specify the value by which to perform the modulo.",
    },
  },
  modf: {
    desc: "modf — separate a value into its integer and fractional components",
    decl: ["genType modf(genType x, out genType i);"],
    params: {
      x: "Specify the value to separate.",
      i: "A variable that receives the integer part of the argument.",
    },
  },
  normalize: {
    desc: "normalize — calculates the unit vector in the same direction as the original vector",
    decl: ["genType normalize(genType v);"],
    params: {
      v: "Specifies the vector to normalize.",
    },
  },
  not: {
    desc: "not — logically invert a boolean vector",
    decl: ["bvec not(bvec x);"],
    params: {
      x: "Specifies the vector to be inverted.",
    },
  },
  notEqual: {
    desc: "notEqual — perform a component-wise not-equal-to comparison of two vectors",
    decl: [
      "bvec notEqual(vec x, vec y);",
      "bvec notEqual(ivec x, ivec y);",
      "bvec notEqual(bvec x, bvec y);",
      "bvec notEqual(uvec x, uvec y);",
    ],
    params: {
      x: "Specifies the first vector to be used in the comparison operation.",
      y: "Specifies the second vector to be used in the comparison operation.",
    },
  },
  outerProduct: {
    desc: "outerProduct — calculate the outer product of a pair of vectors",
    decl: [
      "mat2 outerProduct(vec2 c, vec2 r);",
      "mat3 outerProduct(vec3 c, vec3 r);",
      "mat4 outerProduct(vec4 c, vec4 r);",
      "mat2x3 outerProduct(vec3 c, vec2 r);",
      "mat3x2 outerProduct(vec2 c, vec3 r);",
      "mat2x4 outerProduct(vec4 c, vec2 r);",
      "mat4x2 outerProduct(vec2 c, vec4 r);",
      "mat3x4 outerProduct(vec4 c, vec3 r);",
      "mat4x3 outerProduct(vec3 c, vec4 r);",
    ],
    params: {
      c: "Specifies the parameter to be treated as a column vector.",
      r: "Specifies the parameter to be treated as a row vector.",
    },
  },
  packHalf2x16: {
    desc: "packHalf2x16 — convert two 32-bit floating-point quantities to 16-bit quantities and pack them into a single 32-bit integer",
    decl: ["uint packHalf2x16(vec2 v);"],
    params: {
      v: "Specify a vector of two 32-bit floating point values that are to be converted to 16-bit representation and packed into the result.",
    },
  },
  packSnorm2x16: {
    desc: "packUnorm2x16, packSnorm2x16 — pack floating-point values into an unsigned integer",
    decl: ["uint packSnorm2x16(vec2 v);"],
    params: {
      v: "Specifies a vector of values to be packed into an unsigned integer.",
    },
  },
  packUnorm2x16: {
    desc: "packUnorm2x16, packSnorm2x16 — pack floating-point values into an unsigned integer",
    decl: ["uint packUnorm2x16(vec2 v);"],
    params: {
      v: "Specifies a vector of values to be packed into an unsigned integer.",
    },
  },
  pow: {
    desc: "pow — return the value of the first parameter raised to the power of the second",
    decl: ["genType pow(genType x, genType y);"],
    params: {
      x: "Specify the value to raise to the power y.",
      y: "Specify the power to which to raise x.",
    },
  },
  radians: {
    desc: "radians — convert a quantity in degrees to radians",
    decl: ["genType radians(genType degrees);"],
    params: {
      degrees: "Specify the quantity, in degrees, to be converted to radians.",
    },
  },
  reflect: {
    desc: "reflect — calculate the reflection direction for an incident vector",
    decl: ["genType reflect(genType I, genType N);"],
    params: {
      I: "Specifies the incident vector.",
      N: "Specifies the normal vector.",
    },
  },
  refract: {
    desc: "refract — calculate the refraction direction for an incident vector",
    decl: ["genType refract(genType I, genType N, float eta);"],
    params: {
      I: "Specifies the incident vector.",
      N: "Specifies the normal vector.",
      eta: "Specifies the ratio of indices of refraction.",
    },
  },
  round: {
    desc: "round — find the nearest integer to the parameter",
    decl: ["genType round(genType x);"],
    params: {
      x: "Specify the value to evaluate.",
    },
  },
  roundEven: {
    desc: "roundEven — find the nearest even integer to the parameter",
    decl: ["genType roundEven(genType x);"],
    params: {
      x: "Specify the value to evaluate.",
    },
  },
  sign: {
    desc: "sign — extract the sign of the parameter",
    decl: ["genType sign(genType x);", "genIType sign(genIType x);"],
    params: {
      x: "Specify the value from which to extract the sign.",
    },
  },
  sin: {
    desc: "sin — return the sine of the parameter",
    decl: ["genType sin(genType angle);"],
    params: {
      angle: "Specify the quantity, in radians, of which to return the sine.",
    },
  },
  sinh: {
    desc: "sinh — return the hyperbolic sine of the parameter",
    decl: ["genType sinh(genType x);"],
    params: {
      x: "Specify the value whose hyperbolic sine to return.",
    },
  },
  smoothstep: {
    desc: "smoothstep — perform Hermite interpolation between two values",
    decl: [
      "genType smoothstep(genType edge0, genType edge1, genType x);",
      "genType smoothstep(float edge0, float edge1, genType x);",
    ],
    params: {
      edge0: "Specifies the value of the lower edge of the Hermite function.",
      edge1: "Specifies the value of the upper edge of the Hermite function.",
      x: "Specifies the source value for interpolation.",
    },
  },
  sqrt: {
    desc: "sqrt — return the square root of the parameter",
    decl: ["genType sqrt(genType x);"],
    params: {
      x: "Specify the value of which to take the square root.",
    },
  },
  step: {
    desc: "step — generate a step function by comparing two values",
    decl: ["genType step(genType edge, genType x);", "genType step(float edge, genType x);"],
    params: {
      edge: "Specifies the location of the edge of the step function.",
      x: "Specify the value to be used to generate the step function.",
    },
  },
  tan: {
    desc: "tan — return the tangent of the parameter",
    decl: ["genType tan(genType angle);"],
    params: {
      angle: "Specify the quantity, in radians, of which to return the tangent.",
    },
  },
  tanh: {
    desc: "tanh — return the hyperbolic tangent of the parameter",
    decl: ["genType tanh(genType x);"],
    params: {
      x: "Specify the value whose hyperbolic tangent to return.",
    },
  },
  texelFetch: {
    desc: "texelFetch — perform a lookup of a single texel within a texture",
    decl: [
      "gvec4 texelFetch(gsampler2D sampler, ivec2 P, int lod);",
      "gvec4 texelFetch(gsampler3D sampler, ivec3 P, int lod);",
      "gvec4 texelFetch(gsampler2DArray sampler, ivec3 P, int lod);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      lod: "If present, specifies the level-of-detail within the texture from which the texel will be fetched.",
    },
  },
  texelFetchOffset: {
    desc: "texelFetchOffset — perform a lookup of a single texel within a texture with an offset",
    decl: [
      "gvec4 texelFetchOffset(gsampler2D sampler, ivec2 P, int lod, ivec2 offset);",
      "gvec4 texelFetchOffset(gsampler3D sampler, ivec3 P, int lod, ivec3 offset);",
      "gvec4 texelFetchOffset(gsampler2DArray sampler, ivec3 P, int lod, ivec2 offset);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      lod: "If present, specifies the level-of-detail within the texture from which the texel will be fetched.",
      offset: "Specifies offset, in texels that will be applied to P before looking up the texel.",
    },
  },
  texture: {
    desc: "texture — retrieves texels from a texture",
    decl: [
      "gvec4 texture(gsampler2D sampler, vec2 P, [float bias]);",
      "gvec4 texture(gsampler3D sampler, vec3 P, [float bias]);",
      "gvec4 texture(gsamplerCube sampler, vec3 P, [float bias]);",
      "float texture(sampler2DShadow sampler, vec3 P, [float bias]);",
      "float texture(samplerCubeShadow sampler, vec4 P, [float bias]);",
      "gvec4 texture(gsampler2DArray sampler, vec3 P, [float bias]);",
      "float texture(sampler2DArrayShadow sampler, vec4 P);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      bias: "Specifies an optional bias to be applied during level-of-detail computation.",
    },
  },
  textureGrad: {
    desc: "textureGrad — perform a texture lookup with explicit gradients",
    decl: [
      "gvec4 textureGrad(gsampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy);",
      "gvec4 textureGrad(gsampler3D sampler, vec3 P, vec3 dPdx, vec3 dPdy);",
      "gvec4 textureGrad(gsamplerCube sampler, vec3 P, vec3 dPdx, vec3 dPdy);",
      "float textureGrad(sampler2DShadow sampler, vec3 P, vec2 dPdx, vec2 dPdy);",
      "float textureGrad(samplerCubeShadow sampler, vec4 P, vec3 dPdx, vec3 dPdy);",
      "gvec4 textureGrad(gsampler2DArray sampler, vec3 P, vec2 dPdx, vec2 dPdy);",
      "float textureGrad(sampler2DArrayShadow sampler, vec4 P, vec2 dPdx, vec2 dPdy);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      dPdx: "Specifies the partial derivative of P with respect to window x.",
      dPdy: "Specifies the partial derivative of P with respect to window y.",
    },
  },
  textureGradOffset: {
    desc: "textureGradOffset — perform a texture lookup with explicit gradients and offset",
    decl: [
      "gvec4 textureGradOffset(gsampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy, ivec2 offset);",
      "gvec4 textureGradOffset(gsampler3D sampler, vec3 P, vec3 dPdx, vec3 dPdy, ivec3 offset);",
      "float textureGradOffset(sampler2DShadow sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset);",
      "gvec4 textureGradOffset(gsampler2DArray sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset);",
      "float textureGradOffset(sampler2DArrayShadow sampler, vec4 P, vec2 dPdx, vec2 dPdy, ivec2 offset);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      dPdx: "Specifies the partial derivative of P with respect to window x.",
      dPdy: "Specifies the partial derivative of P with respect to window y.",
      offset: "Specifies the offset to be applied to the texture coordinates before sampling.",
    },
  },
  textureLod: {
    desc: "textureLod — perform a texture lookup with explicit level-of-detail",
    decl: [
      "gvec4 textureLod(gsampler2D sampler, vec2 P, float lod);",
      "gvec4 textureLod(gsampler3D sampler, vec3 P, float lod);",
      "gvec4 textureLod(gsamplerCube sampler, vec3 P, float lod);",
      "float textureLod(sampler2DShadow sampler, vec3 P, float lod);",
      "gvec4 textureLod(gsampler2DArray sampler, vec3 P, float lod);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      lod: "Specifies the explicit level-of-detail",
    },
  },
  textureLodOffset: {
    desc: "textureLodOffset — perform a texture lookup with explicit level-of-detail and offset",
    decl: [
      "gvec4 textureLodOffset(gsampler2D sampler, vec2 P, float lod, ivec2 offset);",
      "gvec4 textureLodOffset(gsampler3D sampler, vec3 P, float lod, ivec3 offset);",
      "float textureLodOffset(sampler2DShadow sampler, vec3 P, float lod, ivec2 offset);",
      "gvec4 textureLodOffset(gsampler2DArray sampler, vec3 P, float lod, ivec2 offset);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which the texture will be sampled.",
      lod: "Specifies the explicit level-of-detail from which texels will be fetched.",
      offset: "Specifies the offset that will be applied to P before texels are fetched.",
    },
  },
  textureOffset: {
    desc: "textureOffset — perform a texture lookup with offset",
    decl: [
      "gvec4 textureOffset(gsampler2D sampler, vec2 P, ivec2 offset, [float bias]);",
      "gvec4 textureOffset(gsampler3D sampler, vec3 P, ivec3 offset, [float bias]);",
      "float textureOffset(sampler2DShadow sampler, vec3 P, ivec2 offset, [float bias]);",
      "gvec4 textureOffset(gsampler2DArray sampler, vec3 P, ivec2 offset, [float bias]);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      offset: "Specifies offset, in texels that will be applied to P before looking up the texel.",
      bias: "Specifies an optional bias to be applied during level-of-detail computation.",
    },
  },
  textureProj: {
    desc: "textureProj — perform a texture lookup with projection",
    decl: [
      "gvec4 textureProj(gsampler2D sampler, vec3 P, [float bias]);",
      "gvec4 textureProj(gsampler2D sampler, vec4 P, [float bias]);",
      "gvec4 textureProj(gsampler3D sampler, vec4 P, [float bias]);",
      "float textureProj(sampler2DShadow sampler, vec4 P, [float bias]);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      bias: "Specifies an optional bias to be applied during level-of-detail computation.",
    },
  },
  textureProjGrad: {
    desc: "textureProjGrad — perform a texture lookup with projection and explicit gradients",
    decl: [
      "gvec4 textureProjGrad(gsampler2D sampler, vec3 P, vec2 dPdx, vec2 dPdy);",
      "gvec4 textureProjGrad(gsampler2D sampler, vec4 P, vec2 dPdx, vec2 dPdy);",
      "gvec4 textureProjGrad(gsampler3D sampler, vec4 P, vec3 dPdx, vec3 dPdy);",
      "float textureProjGrad(sampler2DShadow sampler, vec4 P, vec2 dPdx, vec2 dPdy);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      dPdx: "Specifies the partial derivative of P with respect to window x.",
      dPdy: "Specifies the partial derivative of P with respect to window y.",
    },
  },
  textureProjGradOffset: {
    desc: "textureProjGradOffset — perform a texture lookup with projection, explicit gradients and offset",
    decl: [
      "gvec4 textureProjGradOffset(gsampler2D sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset);",
      "gvec4 textureProjGradOffset(gsampler2D sampler, vec4 P, vec2 dPdx, vec2 dPdy, ivec2 offset);",
      "gvec4 textureProjGradOffset(gsampler3D sampler, vec4 P, vec3 dPdx, vec3 dPdy, ivec3 offset);",
      "float textureProjGradOffset(sampler2DShadow sampler, vec4 P, vec2 dPdx, vec2 dPdy, ivec2 offset);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      dPdx: "Specifies the partial derivative of P with respect to window x.",
      dPdy: "Specifies the partial derivative of P with respect to window y.",
      offset:
        "Specifies the offsets, in texels at which the texture will be sampled relative to the projection of P.",
    },
  },
  textureProjLod: {
    desc: "textureProjLod — perform a texture lookup with projection and explicit level-of-detail",
    decl: [
      "gvec4 textureProjLod(gsampler2D sampler, vec3 P, float lod);",
      "gvec4 textureProjLod(gsampler2D sampler, vec4 P, float lod);",
      "gvec4 textureProjLod(gsampler3D sampler, vec4 P, float lod);",
      "float textureProjLod(sampler2DShadow sampler, vec4 P, float lod);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      lod: "Specifies the explicit level-of-detail from which to fetch texels.",
    },
  },
  textureProjLodOffset: {
    desc: "textureProjLodOffset — perform a texture lookup with projection and explicit level-of-detail and offset",
    decl: [
      "gvec4 textureProjLodOffset(gsampler2D sampler, vec3 P, float lod, ivec2 offset);",
      "gvec4 textureProjLodOffset(gsampler2D sampler, vec4 P, float lod, ivec2 offset);",
      "gvec4 textureProjLodOffset(gsampler3D sampler, vec4 P, float lod, ivec3 offset);",
      "float textureProjLodOffset(sampler2DShadow sampler, vec4 P, float lod, ivec2 offset);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which texture will be sampled.",
      lod: "Specifies the explicit level-of-detail from which to fetch texels.",
      offset: "Specifies the offset, in texels, to be applied to P before fetching texels.",
    },
  },
  textureProjOffset: {
    desc: "textureProjOffset — perform a texture lookup with projection and offset",
    decl: [
      "gvec4 textureProjOffset(gsampler2D sampler, vec3 P, ivec2 offset, [float bias]);",
      "gvec4 textureProjOffset(gsampler2D sampler, vec4 P, ivec2 offset, [float bias]);",
      "gvec4 textureProjOffset(gsampler3D sampler, vec4 P, ivec3 offset, [float bias]);",
      "float textureProjOffset(sampler2DShadow sampler, vec4 P, ivec2 offset, [float bias]);",
    ],
    params: {
      sampler:
        "Specifies the sampler to which the texture from which texels will be retrieved is bound.",
      P: "Specifies the texture coordinates at which the texture will be sampled.",
      offset: "Specifies the offset that is applied to P before sampling occurs.",
      bias: "Specifies an optional bias to be applied during level-of-detail computation.",
    },
  },
  textureSize: {
    desc: "textureSize — retrieve the dimensions of a level of a texture",
    decl: [
      "ivec2 textureSize(gsampler2D sampler, int lod);",
      "ivec3 textureSize(gsampler3D sampler, int lod);",
      "ivec2 textureSize(gsamplerCube sampler, int lod);",
      "ivec2 textureSize(sampler2DShadow sampler, int lod);",
      "ivec2 textureSize(samplerCubeShadow sampler, int lod);",
      "ivec3 textureSize(gsampler2DArray sampler, int lod);",
      "ivec3 textureSize(sampler2DArrayShadow sampler, int lod);",
    ],
    params: {
      sampler: "Specifies the sampler to which the texture whose dimensions to retrieve is bound.",
      lod: "Specifies the level of the texture for which to retrieve the dimensions.",
    },
  },
  transpose: {
    desc: "transpose — calculate the transpose of a matrix",
    decl: [
      "mat2 transpose(mat2 m);",
      "mat3 transpose(mat3 m);",
      "mat4 transpose(mat4 m);",
      "mat2x3 transpose(mat3x2 m);",
      "mat2x4 transpose(mat4x2 m);",
      "mat3x2 transpose(mat2x3 m);",
      "mat3x4 transpose(mat4x3 m);",
      "mat4x2 transpose(mat2x4 m);",
      "mat4x3 transpose(mat3x4 m);",
    ],
    params: {
      m: "Specifies the matrix of which to take the transpose.",
    },
  },
  trunc: {
    desc: "trunc — find the truncated value of the parameter",
    decl: ["genType trunc(genType x);"],
    params: {
      x: "Specify the value to evaluate.",
    },
  },
  uintBitsToFloat: {
    desc: "intBitsToFloat, uintBitsToFloat — produce a floating point using an encoding supplied as an integer",
    decl: ["genType uintBitsToFloat(genUType x);"],
    params: {
      x: "Specifies the bit encoding to return as a floating point value.",
    },
  },
  unpackHalf2x16: {
    desc: "unpackHalf2x16 — convert two 16-bit floating-point values packed into a single 32-bit integer into a vector of two 32-bit floating-point quantities",
    decl: ["vec2 unpackHalf2x16(uint v);"],
    params: {
      v: "Specify a single 32-bit unsigned integer values that contains two 16-bit floating point values to be unpacked.",
    },
  },
  unpackSnorm2x16: {
    desc: "unpackUnorm2x16, unpackSnorm2x16 — unpack floating-point values from an unsigned integer",
    decl: ["vec2 unpackSnorm2x16(uint p);"],
    params: {
      p: "Specifies an unsigned integer containing packed floating-point values.",
    },
  },
  unpackUnorm2x16: {
    desc: "unpackUnorm2x16, unpackSnorm2x16 — unpack floating-point values from an unsigned integer",
    decl: ["vec2 unpackUnorm2x16(uint p);"],
    params: {
      p: "Specifies an unsigned integer containing packed floating-point values.",
    },
  },
};
