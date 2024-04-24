import { InfinitySpin } from 'react-loader-spinner';

const Loading = () => {
    return(
        <div className="loading-data">
            <InfinitySpin
            visible={true}
            width="200px"
            color="#eb3656"
            ariaLabel="infinity-spin-loading"
            />
        </div>
    )
}

export default Loading;