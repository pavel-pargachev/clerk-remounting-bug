Steps:
1. Log-in/Sign-up
2. Create Org
3. Click "Manage" on the current org to open Og Profile popup
4. Go to "Custom Page"
5. Enter text in the input field
6. Wait for 1 minute, until clerk refreshes token, and useAuth() hook fires re-render

Observe:
1. Text in the input field disappeared
2. It the inpt field was focused: the focus is lost
