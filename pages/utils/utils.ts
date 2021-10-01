export const wrapFileStaticProps = (prop: Object) => {
    return JSON.parse(JSON.stringify(prop));
}