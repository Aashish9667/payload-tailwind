
export default async function Cards() {
    const res = await fetch("http://localhost:3000/api/cards", {
        cache: "no-store",
    });

    const data = await res.json();
    const docs = data.docs || [];

    return (
        <div className=" mx-auto max-w-[1200px] p-10">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {docs.map((item: any) => (
                <div key={item.id} className="w-80 shadow  rounded-md">
                    {item?.image?.url && (
                        <img
                            className="rounded-t-md w-full"
                            src={`http://localhost:3000${item.image.url}`}
                            alt={item.title}
                        />
                    )}
                    <div className="p-5">
                        <h2 className="font-bold text-lg">{item.title}</h2>
                        <p className="text-gray-600">{item.subtitle}</p>
                        <div className="flex justify-end items-end gap-2">
                        <button className="border px-2 rounded-md">{item.button2}</button>
                        <button className="border px-2 rounded-md">{item.button3}</button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
        </div>
    );
}