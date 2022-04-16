import React from "react";

interface propsWithChildren {
    children: React.ReactNode
}

const RootPage = ({ children }: propsWithChildren) => {
    return <>
        <header className="p-5 text-center bg-blue-600 text-white">Quiz app</header>
        <main className="p-5">{children}</main>
        <footer className="p-5 text-center">Powered by Domo</footer>
    </>
};

export default RootPage;