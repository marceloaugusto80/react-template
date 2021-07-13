export default function teardown(): Promise<void> {
    console.log("\n\n## Teardown function called\n\n");
    return Promise.resolve();
}