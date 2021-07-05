const encoder = new TextEncoder()
const { files } = await Deno.emit('./index.js', {
  bundle: 'classic',
  compilerOptions: {
    target: 'es2018'
  }
})
const result = files['deno:///bundle.js']
await Deno.writeFile('./dist/bundle.js', encoder.encode(result))