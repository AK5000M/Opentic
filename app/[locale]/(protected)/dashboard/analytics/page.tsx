import Image from "next/image";
import { StatisticsBlock } from "@/components/blocks/statistics-block";
import { BlockBadge, WelcomeBlock } from "@/components/blocks/welcome-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RevinueBarChart from "@/components/revenue-bar-chart";
import DashboardDropdown from "@/components/dashboard-dropdown";
import OverviewChart from "./components/overview-chart";
import CompanyTable from "./components/company-table";
import RecentActivity from "./components/recent-activity";
import MostSales from "./components/most-sales";
import OverviewRadialChart from "./components/overview-radial";
import { useTranslations } from "next-intl";
const DashboardPage = () => {
	const t = useTranslations("AnalyticsDashboard");
	return (
		<div>
			<div className="grid grid-cols-12 items-center gap-5 mb-5">
				<div className="2xl:col-span-3 lg:col-span-4 col-span-12">
					<WelcomeBlock>
						<div className="max-w-[180px] relative z-10">
							<div className="text-xl font-medium text-default-900 dark:text-default-100 mb-2">
								{t("widget_title")}
							</div>
							<p className="text-sm text-default-800 dark:text-default-100">
								{t("widget_desc")}
							</p>
						</div>
						<BlockBadge className="end-3">
							{t("widget_badge")}
						</BlockBadge>
						<Image
							src="/images/all-img/widget-bg-1.png"
							width={400}
							height={150}
							priority
							alt="Description of the image"
							className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
						/>
					</WelcomeBlock>
				</div>
				<div className="2xl:col-span-9 lg:col-span-8 col-span-12">
					<Card>
						<CardContent className="p-4">
							<div className="grid md:grid-cols-3   gap-4">
								<StatisticsBlock
									title={t("revenue_chart_title")}
									total="3,564"
									className="bg-info/10 border-none shadow-none"
								/>
								<StatisticsBlock
									title={t("sold_chart_title")}
									total="564"
									className="bg-warning/10 border-none shadow-none"
									chartColor="#FB8F65"
								/>
								<StatisticsBlock
									title={t("growth_chart_title")}
									total="+5.0%"
									className="bg-primary/10 border-none shadow-none"
									chartColor="#2563eb"
								/>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-5">
				<div className="lg:col-span-8 col-span-12">
					<Card>
						<CardContent className="p-4">
							<RevinueBarChart />
						</CardContent>
					</Card>
				</div>
				<div className="lg:col-span-4 col-span-12">
					<Card>
						<CardHeader className="flex flex-row items-center">
							<CardTitle className="flex-1">
								{t("overview_circle_chart_title")}
							</CardTitle>
							<DashboardDropdown />
						</CardHeader>
						<CardContent>
							<OverviewChart />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
