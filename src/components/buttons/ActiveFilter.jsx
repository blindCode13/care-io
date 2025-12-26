"use client";

import Link from "next/link";

const Filter = ({to, filter, children}) => {

    if (filter === undefined) filter = '';

    return <Link href={`/service?filter=${to}`} className={`px-4 py-2 border-2 border-(--primary-color) rounded-2xl ${filter === to && "bg-(--primary-color) text-white"}`}>{children}</Link>;
};

export default Filter;