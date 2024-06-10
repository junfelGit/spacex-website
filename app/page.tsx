
import { default as ShipComponent } from "@/components/Ship";
import type { Ship } from "@/util/types/graphql";


const fetchShips = async () => {
	const res = await fetch("http://localhost:3000/graphql", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query: "query Query($input: ShipsInput!) { ships(input: $input)  { id name image  } }",
			variables: {
				input: {
					pagination: {
						offset: 0,
						limit: 1,
					},
				},
			},
		}),
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

export default async function Home() {

	const { data } = await fetchShips();

	return (
		<main className="flex justify-center min-h-screen p-14">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{data?.ships?.map((ship: Ship) => (
					<ShipComponent
						name={ship.name}
						image={ship.image}
						id={ship.id}
						key={ship.id}
					/>
				))}
			</div>
		</main>
	);
}
