import Head from "next/head";
import { server } from "../config";

export default function Home() {
	return (
		<>
			<Head>
				<title>Firestarter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				className="grid w-screen h-screen bg-fixed bg-center bg-cover"
				style={{
					backgroundImage:
						"url(https://unsplash.com/photos/EdULZpOKsUE/download?force=true&w=1920)",
				}}
			>
				<Navigation classes="" />
				<h1 className="self-center text-5xl font-bold tracking-wide text-gray-900 justify-self-center">
					Start a fire in your heart
				</h1>
			</div>
		</>
	);
}

function Navigation(props: { classes: string }) {
	return (
		<div
			id="Navigation"
			className={`flex flex-wrap justify-between p-2 bg-black bg-opacity-25 ${props.classes} content-end fixed w-screen items-end`}
		>
			<p className="text-4xl font-semibold text-red-500">Firestarter</p>
			<div className="flex gap-2 ">
				<Button borderColor="border-blue-500" text="Log In" />
				<Button borderColor="border-red-500" text="Sign Up" />
			</div>
		</div>
	);
}

function Button(props: { text: string; borderColor: string }) {
	return (
		<button className={`${props.borderColor} rounded-lg p-2 border-2`}>
			<p className="font-semibold text-gray-100">{props.text}</p>
		</button>
	);
}
