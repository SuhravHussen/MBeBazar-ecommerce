import { Skeleton } from '../../utils/commonImports';

export default function BottomHeaderSK() {
    return (
        <div
            style={{
                height: '70px',
                background: 'transparent',
                maxWidth: '1600px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div style={{ width: '15%' }}>
                <Skeleton width={170} height={45} animation="wave" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '60%' }}>
                <Skeleton width={92} height={45} animation="wave" />
                <Skeleton width={92} height={45} animation="wave" />
                <Skeleton width={92} height={45} animation="wave" />
            </div>
            <div style={{ display: 'flex', width: '15%', alignItems: 'center', gap: '20px' }}>
                <Skeleton width={30} height={30} animation="wave" />
                <Skeleton width={116} height={70} animation="wave" />
            </div>
        </div>
    );
}
