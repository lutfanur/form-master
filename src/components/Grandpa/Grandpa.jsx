import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

const AssetContext = createcontext('gold');


const Grandpa = () => {
    const asset = 'diamond'
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
                <section className="flex">
                    <Father asset={asset}></Father>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;