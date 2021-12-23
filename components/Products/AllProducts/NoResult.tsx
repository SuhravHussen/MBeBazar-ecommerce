import { Image } from '../../../utils/commonImports';

export default function NoResult() {
    return (
        <div style={{ marginTop: '2%', marginBottom: '3%' }}>
            <Image
                src="/images/illustrates/no-result.svg"
                height={380}
                width={400}
                alt="No Result Image"
            />
            <h3>
                Sorry, we can not find any product
                <span aria-label="Sad Emoji" role="img">
                    😞
                </span>
            </h3>
        </div>
    );
}
