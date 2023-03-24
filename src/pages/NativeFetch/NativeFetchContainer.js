import { useEffect } from "react";
import { useFetching } from "../../hooks";

import NativeFetchView from "./NativeFetchView";

const URL = "https://api.sampleapis.com/countries/countries";

const NativeFetchContainer = () => {
  //   const [data, setData] = useState([]);
  //   const [errors, setErrors] = useState(null);
  //   const [isLoading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     (async () => {
  //       try {
  //         const data = await fetch(URL).then((response) => response.json());

  //         setData(data);
  //       } catch (error) {
  //         setErrors(error.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     })();
  //   }, []);

  //-----------------------------------------------------------------------------------

  //     fetch(URL)
  //       .then((response) => response.json())
  //       .then((data) => setData(data))
  //       .catch((error) => setErrors(error.message))
  //       .finally(() => setLoading(false));

  const { data, errors, isLoading, handleDataLoad } = useFetching(() =>
    fetch(URL).then((response) => response.json())
  );

  useEffect(() => {
    handleDataLoad();
  }, []);

  return (
    <>
      <NativeFetchView data={data} errors={errors} isLoading={isLoading} />
    </>
  );
};

export default NativeFetchContainer;
