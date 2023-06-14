const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Before install prompt event handler
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('👍', 'beforeinstallprompt', event);
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Update UI notify the user they can add to home screen
  butInstall.style.display = 'block';
});

// Click event handler for the install button
butInstall.addEventListener('click', async () => {
  console.log('👍', 'butInstall-clicked');
  // Hide our user interface that shows our A2HS button
  butInstall.style.display = 'none';
  // Show the prompt
  if (!deferredPrompt) {
    console.error('Deferred prompt is not defined');
    return;
  }
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const choiceResult = await deferredPrompt.userChoice;
  if (choiceResult.outcome === 'accepted') {
    console.log('👍', 'User accepted the A2HS prompt');
  } else {
    console.log('👎', 'User dismissed the A2HS prompt');
  }
  deferredPrompt = null;
});

// App installed event handler
window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  // Log the event
});

