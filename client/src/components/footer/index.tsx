export function Footer() {
  return (
    <footer className="max-w-full border-t mt-6 bg-background">
      <nav className="flex flex-col items-start md:items-center px-4 md:px-6 gap-6 py-12">
        <div className="md:text-center">
          <h1>GSHV</h1>
          <p className="muted !text-base">An ecommerce grocery store built with Hono + Vite</p>
          <p className="muted mt-8">
            Created in
            <span className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 32 32"
                className="inline-flex"
              >
                <path
                  fill="#fff"
                  d="M10 4H22V28H10z"
                ></path>
                <path
                  d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  fill="#3b8655"
                ></path>
                <path
                  d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  transform="rotate(180 26 16)"
                  fill="#3b8655"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
            </span>
            with
            <span className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-flex text-destructive"
              >
                <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path>
              </svg>
            </span>
            by <span className="font-medium">esseno</span>
          </p>
        </div>
      </nav>
    </footer>
  );
}
