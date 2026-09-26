import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		localPatterns: [{ pathname: "/synapto_logo.png", search: "?v=2" }],
	},
};

export default nextConfig;
