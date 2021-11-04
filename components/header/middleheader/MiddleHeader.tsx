import dynamic from 'next/dynamic';

const DekstopHeader = dynamic(() => import('./ForDekstop'), {
    loading: () => <p>loading</p>,
});
const MiddleHeader = () => (
    <>
        <DekstopHeader />
    </>
);

export default MiddleHeader;
