const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-4 text-amber-50">
      <h1>User Profile</h1>
      <p>Welcome back, John!</p>
      <button>Edit Profile</button>
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-4 text-amber-50">
      <h1>Settings</h1>
      <p>Configure your preferences</p>
      <button>Save Settings</button>
    </div>
  );
};

const App = () => {
  return (
    <main className="container flex flex-col gap-10">
      <ProfilePage />
      <SettingsPage />
    </main>
  );
};

export default App;
