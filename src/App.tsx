import Switcher from "@components/switcher";

function App() {
	return (
		<div className="bg-background">
			<center>
				<Switcher />
				<div className="bg-background">
					<p className="text-primary">Primary</p>
					<p className="text-secondary">Secondary</p>
					<p className="text-accent">Accent</p>
				</div>
			</center>
		</div>
	);
}

export default App;
