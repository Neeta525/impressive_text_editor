const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
  installBtn.style.visibility = 'visible';
  textHeader.textContent = 'Click the button to install!';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';
    textHeader.textContent = 'Click the button to install!';  
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
});




const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

// window.addEventListener('beforeinstallprompt', (event) => {
//   event.preventDefault();
//   installBtn.style.visibility = 'visible';
//   textHeader.textContent = 'Click the button to install!';

//   installBtn.addEventListener('click', () => {
//     event.prompt();
//     installBtn.setAttribute('disabled', true);
//     installBtn.textContent = 'Installed!';
//   });
// });

// window.addEventListener('appinstalled', (event) => {
//   textHeader.textContent = 'Successfully installed!';
//   console.log('👍', 'appinstalled', event);
// });