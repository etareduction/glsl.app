# 🌅 glsl.app

⚡ Modern GLSL Shaders Editor, a powerful web application designed for developers and enthusiasts who want to create stunning graphics and effects.

⚡ You can write complex shaders with ease thanks to advanced **intellisense** and **autocompletion** features that help you write clean, efficient code quickly. It goes beyond the basics, also allowing you to **include other shaders** in your work for added **composability** and featuring a user-friendly interface for **tweaking values and colors**.

⚡ Powered by [Monaco Editor](https://github.com/microsoft/monaco-editor) and [ShaderFrog GLSL Parser](https://github.com/ShaderFrog/glsl-parser)

## 👍 Feedback

The tool is still in **beta**! If you encounter any bugs, feel free to open an issue.

## 📝 Contribution

Contributions are welcome, especially UI **translations**!

If you want to add a new language, please check `/src/locales/` folder and use `en.yaml` as the base for your translation. It contains useful comments to help with the context.

But if you're in the mood to provide something big, make sure to start with checking out **[updates project](https://github.com/orgs/zeokku/projects/2)**

## 🖥️ Local development

```sh
# clone a fork of glsl parser
git clone -b modern-package+maps --single-branch https://github.com/Lutymane/glsl-parser.git

# clone this repository
git clone https://github.com/zeokku/glsl.app.git

# enter parser folder and build it
cd glsl-parser

# linux
./build.sh
# OR windows
./build.ps1

# enter app folder
cd ../glsl.app

# link parser package to our repo
pnpm link ../glsl-parser

pnpm i
```
