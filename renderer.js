const chrome = document.getElementById('chromever')
const node = document.getElementById('nodever')
const electronjs = document.getElementById('electronver')
chrome.innerText = versions.chrome()
node.innerText = versions.node()
electronjs.innerText = versions.electron()

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
}
  
func()