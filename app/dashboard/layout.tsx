export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <div className="hidden md:block p-5 min-w-[250px] h-screen border-r"></div>
      <div className="flex-1 h-screen relative">
        <header className="sticky top-0 left-0 border-b px-5 py-3 flex items-center justify-between">
          <div>
            {/* <div className="uppercase font-semibold">dashboard</div> */}
          </div>
          <div className="flex space-x-7">
            <NotificationTab />
            <ProfileTab />
          </div>
        </header>
        <main>
          <div className="bg-gray-500 py-3 h-[180px]">
            <div className="translate-y-[20%] px-5 space-y-10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="capitalize text-xl font-bold text-white">courses</div>
                </div>
                <div>
                  <button className="bg-white rounded-md px-10 py-3 capitalize font-semibold">
                    create new project
                  </button>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className="">
                  <div className="bg-white shadow-lg space-y-10 rounded-md p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold capitalize">first semester</div>
                      </div>
                      <div>
                        <AcademicCap /> 
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">15</div>
                      <div className="font-semibold text-gray-500">registered courses</div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white shadow-lg space-y-10 rounded-md p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold capitalize">second semester</div>
                      </div>
                      <div>
                        <AcademicCap /> 
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">23</div>
                      <div className="font-semibold text-gray-500">registered courses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}

function AcademicCap() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
  </svg>
  )
}

function NotificationTab() {
  return (
    <button className="relative">
      <div className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-black text-white">
        <NotificationIcon />
      </div>
      <div className="absolute top-0 border-2 border-white left-0 w-[10px] h-[10px] bg-blue-600 rounded-full"></div>
    </button>
  )
}

function NotificationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
    </svg>
  )
}

function ProfileTab() {
  return (
    <button className="relative">
      <img
        src="favicon.ico"
        width="35"
        height="35"
        className="rounded-full bg-gray-100 object-contain"
      />
      <div className="absolute bottom-0 border-2 border-white right-0 w-[10px] h-[10px] bg-green-600 rounded-full"></div>
    </button>
  )
}