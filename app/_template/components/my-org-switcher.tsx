"use client"

import { useState } from "react";
import { OrganizationSwitcher, useAuth } from "@clerk/nextjs";

const DotIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
        </svg>
    )
}

const CustomPage = () => {
    const [text, setText] = useState("");
    return (
        <div>
            <h1 className="cl-headerTitle">Custom page</h1>
            <p className="pt-4 pb-2">To reproduce the bug:</p>
            <ol className="list-decimal list-inside">
                <li>Enter anything into the &lt;input/&gt;</li>
                <li>Wait for 1 minute (until clerk refreshes token)</li>
            </ol>
            <p className="pt-4 pb-2">This whole custom page is remounted, so it's state, and focus state of
                the &lt;input/&gt; are lost</p>

            <input
                value={text} onInput={e => setText(e.currentTarget.value)}
                placeholder="Enter your text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <p className="pt-4 pb-4 text-xs">
                {"Thank to this mini reproduction I found a workaround:"}<br/>
                {"I need to prevent <OrganizationSwitcher> from ever re-rendering;"}<br/>
                {"Here it re-renders because of `const { orgSlug } = useAuth();`"}
            </p>
        </div>
    )
}

export default function MyOrgSwitcher() {
    const { orgSlug } = useAuth();

    return (
        <>
            <span>Org Slug: {orgSlug}</span>
            <OrganizationSwitcher>
                <OrganizationSwitcher.OrganizationProfilePage label="Custom Page" url="custom" labelIcon={<DotIcon/>}>
                    <CustomPage/>
                </OrganizationSwitcher.OrganizationProfilePage>
            </OrganizationSwitcher>
        </>
    );
}
