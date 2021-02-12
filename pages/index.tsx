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
				className="w-screen h-screen bg-fixed bg-center bg-cover"
				style={{
					backgroundImage:
						"url(https://unsplash.com/photos/EdULZpOKsUE/download?force=true&w=1920)",
				}}
			>
				<Navigation classes="" />
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				fringilla nec lorem ut fermentum. Cras eget libero dolor. Morbi a
				elementum diam. Sed ut est odio. Donec et sapien aliquet, imperdiet dui
				vitae, lobortis eros. Cras blandit, nisi ut ornare ullamcorper, ligula
				orci tincidunt erat, ut sagittis nunc leo eget leo. Fusce ut imperdiet
				eros. Ut ut elit nec enim tempus porta. Suspendisse tincidunt volutpat
				sem vitae luctus. Nunc vestibulum magna in tellus accumsan mattis a eu
				mi. Nullam commodo nulla urna, ut accumsan metus elementum et. Vivamus
				fermentum, nisl et tristique suscipit, felis justo faucibus mauris, ac
				fringilla elit nisi eget lectus. Interdum et malesuada fames ac ante
				ipsum primis in faucibus. Integer imperdiet posuere magna non fringilla.
				Maecenas molestie rutrum sagittis. Etiam elementum nunc lectus, a
				iaculis est feugiat a. Fusce sed consectetur est, ut molestie ipsum.
				Proin nisl ante, maximus a aliquet quis, euismod sit amet arcu. Etiam
				cursus erat ac nisl posuere, vel ultrices neque pulvinar. Phasellus
				sodales viverra semper. Nam non pharetra orci, a feugiat libero. Quisque
				vitae bibendum dui. Quisque vulputate viverra justo, vitae luctus ante
				ullamcorper nec. Quisque auctor arcu in nibh interdum, vitae accumsan
				sapien scelerisque. Etiam posuere quis arcu nec sagittis. Duis ac congue
				nisl, eu dictum ex. Mauris id odio eget eros cursus semper. In sed dolor
				vehicula, sollicitudin risus a, iaculis odio. Nunc euismod nisl vitae
				augue congue, eu ultricies tellus congue. Phasellus auctor turpis
				mauris, quis dictum justo consequat vel. Morbi molestie orci ut dui
				vehicula, ac rutrum lacus interdum.
			</p>
		</>
	);
}

function Navigation(props: { classes: string }) {
	return (
		<div
			id="Navigation"
			className={`flex flex-wrap justify-between p-2 bg-black bg-opacity-25 ${props.classes} content-end fixed w-screen items-end`}
		>
			<p className="text-3xl font-semibold text-red-700">Firestarter</p>
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
