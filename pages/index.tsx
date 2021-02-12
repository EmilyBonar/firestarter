import Head from "next/head";
export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Firestarter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
		</div>
	);
}

function Navigation() {
	return (
		<div id="Navigation" className="flex flex-wrap justify-between m-2">
			<p className="text-2xl font-semibold text-red-700">Firestarter</p>
			<div className="flex gap-2 ">
				<Button borderColor="border-blue-500" text="Log In" />
				<Button borderColor="border-red-500" text="Sign Up" />
			</div>
		</div>
	);
}

function Button(props: { text: string; borderColor: string }) {
	return (
		<button className={`${props.borderColor} rounded p-2 border`}>
			<p className="font-semibold text-gray-800">{props.text}</p>
		</button>
	);
}
