import deviceSpecs from "./device-spec/data";

export function onRequestGet({ request }: { request: Request }) {
    const url = new URL(request.url);
    const productType = url.searchParams.get("productType");

    if (productType) {
        const spec = deviceSpecs[productType as keyof typeof deviceSpecs];
        if (!spec) {
            return new Response(`Device not found: ${productType}`, { status: 404 });
        }
        return Response.json({ [productType]: spec });
    }

    return Response.json(deviceSpecs);
}
