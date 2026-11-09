export default async function DynamicPage({ params }) {
    const {folderId} = await params;
    console.log(folderId);
    return <div>
        hello {JSON.stringify(folderId)}


    </div>
}