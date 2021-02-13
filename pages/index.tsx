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
	return (
		<div className="flex justify-center h-screen bg-gray-200 place-items-center">
			<CardDecorator side="right" />
			<PersonCard />
			<CardDecorator side="left" />
		</div>
	);
}

function PersonCard() {
	return (
		<>
			<div className="z-10 flex flex-col w-5/6 max-w-md bg-gray-200 border border-gray-300 rounded-lg shadow-lg md:w-2/3 h-3/4">
				<img
					className="object-contain object-center h-2/3"
					src="https://www.thispersondoesnotexist.com/image"
				></img>
				<main className="flex flex-col px-4 py-2">
					<div className="flex flex-row items-end justify-between pb-2 border-b-2 border-gray-300">
						<h2 className="text-5xl font-bold tracking-wide text-gray-800">
							Jane Doe
						</h2>
						<div className="flex flex-col self-start text-xl text-right text-gray-500">
							<h3 className="">48 years old</h3>
							<h3></h3>Female
						</div>
					</div>
					<p className="py-2 text-lg text-gray-600">Looking to find a spark</p>
				</main>
				<div className="flex flex-row justify-between h-full text-center text-white text-8xl">
					<ReactionButton side="left" />
					<ReactionButton side="right" />
				</div>
			</div>
		</>
	);
}

function ReactionButton(props: { side: "right" | "left" }) {
	let symbol: JSX.Element;
	let color: string;
	let offset: string;
	if (props.side == "right") {
		symbol = (
			<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
		);
		color = "bg-red-500";
		offset = "-right-4";
	} else {
		symbol = (
			<>
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</>
		);
		color = "bg-gray-500";
		offset = "-left-4";
	}
	return (
		<div
			className={`z-40 grid w-40 h-40 ${color} rounded-full place-items-center relative ${offset}`}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="96"
				height="96"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				{symbol}
			</svg>
		</div>
	);
}

function CardDecorator(props: { side: "left" | "right" }) {
	let side = "";
	if (props.side === "left") {
		side = "-left-1/4 -bottom-2";
	} else {
		side = "-right-1/4 -bottom-2";
	}
	return (
		<div
			className={`relative z-0 w-16 bg-gray-300 shadow-lg h-3/4 ${side} rounded-lg w-2/3 max-w-md`}
		></div>
	);
}

function SplashScreen() {
	return (
		<div
			className="grid w-screen h-screen bg-fixed bg-center bg-cover"
			style={{
				backgroundImage:
					"linear-gradient(black,20%,transparent), url(https://unsplash.com/photos/xjS9YXVFTt4/download?force=true&w=1920)",
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
			className={`flex flex-wrap justify-between p-2 bg-black bg-opacity-80 content-end fixed w-screen ${props.classes}`}
		>
			<p className="text-4xl font-semibold text-red-500">Firestarter</p>
			<div className="flex gap-2 ">
				{props.loggedIn && (
					<NavButton
						borderColor="border-blue-500"
						text="Profile"
						onClick={() => {}}
					/>
				)}
				<NavButton
					borderColor="border-red-500"
					text={props.loggedIn ? "Log Out" : "Log In or Sign Up"}
					onClick={props.loggedIn ? props.logout : props.login}
				/>
			</div>
		</div>
	);
}

function NavButton(props: {
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
