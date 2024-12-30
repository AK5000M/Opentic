"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loader";

import { useMounted } from "@/hooks/use-mounted";
import React from "react";

const MountedProvider = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // Avoid rendering mismatched elements during SSR
	return <>{children}</>;
};

export default MountedProvider;
