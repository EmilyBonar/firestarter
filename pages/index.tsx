import Head from "next/head";
import netlifyAuth from "../config/netlifyAuth";
import netlifyIdentity from "netlify-identity-widget";
import { useEffect, useState } from "react";
import { server } from "../config";

export default function Home() {
	let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
	let [user, setUser] = useState<netlifyIdentity.User>(null);
	useEffect(() => {
		netlifyAuth.initialize((user: netlifyIdentity.User) => {
			setLoggedIn(!!user);
			setUser(user);
		});
	}, [loggedIn]);

	let login = () => {
		netlifyAuth.authenticate((user: netlifyIdentity.User) => {
			setLoggedIn(!!user);
			setUser(user);
			netlifyAuth.closeModal();
		});
	};

	let logout = () => {
		netlifyAuth.signout(() => {
			setLoggedIn(false);
			setUser(null);
		});
	};
	console.log(user);
	return (
		<>
			<Head>
				<title>Firestarter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation
				classes=""
				loggedIn={loggedIn}
				login={login}
				logout={logout}
			/>
			{loggedIn ? <MainScreen /> : <SplashScreen />}
		</>
	);
}

function MainScreen() {
	return <div></div>;
}

function SplashScreen() {
	return (
		<div
			className="grid w-screen h-screen bg-fixed bg-center bg-cover"
			style={{
				backgroundImage:
					"linear-gradient(gray,25%,transparent), url(https://unsplash.com/photos/EdULZpOKsUE/download?force=true&w=1920)",
			}}
		>
			<h1 className="text-6xl font-bold tracking-wide text-center text-red-500 place-self-center">
				Start a fire in your heart
			</h1>
		</div>
	);
}

function Navigation(props: {
	classes: string;
	loggedIn: boolean;
	login: Function;
	logout: Function;
}) {
	return (
		<div
			id="Navigation"
			className={`flex flex-wrap justify-between p-2 bg-gray-600 bg-opacity-80 content-end fixed w-screen ${props.classes}`}
		>
			<p className="text-4xl font-semibold text-red-500">Firestarter</p>
			<div className="flex gap-2 ">
				<Button
					borderColor="border-red-500"
					text={props.loggedIn ? "Log Out" : "Log In or Sign Up"}
					onClick={props.loggedIn ? props.logout : props.login}
				/>
			</div>
		</div>
	);
}

function Button(props: {
	text: string;
	borderColor: string;
	onClick: Function;
}) {
	return (
		<button
			className={`${props.borderColor} rounded-lg p-2 border-2 font-semibold text-gray-100`}
			onClick={() => props.onClick()}
		>
			{props.text}
		</button>
	);
}
