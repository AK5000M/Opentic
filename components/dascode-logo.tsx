import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
type IconProps = React.HTMLAttributes<SVGElement>;
const DashCodeLogo = (props: IconProps) => {
	return (
		<>
			<Link href="/dashboard/analytics">
				<Image
					height={100}
					width={100}
					src="/images/logo/logo-sm.webp"
					alt=""
					className="w-12"
				/>
			</Link>
		</>
	);
};

export default DashCodeLogo;
