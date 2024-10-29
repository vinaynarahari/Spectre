const navItems = [
    {
      id: "0",
      text: "Workspace",
      href: "/",
    },
    {
      id: "1",
      text: "Clients",
      href: "/clients",
    },
    {
      id: "2",
      text: "Analyze",
      href: "/analyze",
    }, 
    {
      id: "3",
      text: "Trash",
      href: "/trash",
    },
    {
      id: "4",
      text: "Profile",
      href: "/profile",
    },
  ]

export default function SideBar() {
    return (

      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-400 text-white flex flex-col p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Sidebar</h2>
          </div>
          <nav>
          <ul>
          {navItems.map((item) => (
              <div key={item.id} className="rounded-lg hover:bg-gray-500 px-1 py-1 text-center">
                <li className="mb-2">
                  <a href={item.href} className="hover:text-gray-300">{item.text}</a>
                </li>
              </div>
          ))}
          </ul>
          </nav>
        </aside>
        </div>
    )
}