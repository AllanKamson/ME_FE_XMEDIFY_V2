import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Component to search the hospitals based on State and City selection.
//API used to fetch details of hospital and set the values in formData
export default function SearchHospital() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      setCities([]);
      setFormData((prev) => ({ ...prev, city: "" }));
      try {
        const data = await axios.get(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        setCities(data.data);
        // console.log("city", data.data);
      } catch (error) {
        console.log("Error in fetching city:", error);
      }
    };

    if (formData.state != "") {
      fetchCities();
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <div id="state">
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>
      </div>

      <div id="city">
      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
      </div>

      <Button
        type="submit"
        id="searchBtn"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
}




// import { useEffect, useState } from "react";
// import { MenuItem, Select, Button, InputAdornment, Box, FormControl, FormHelperText } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios"; 
// import { useNavigate } from "react-router-dom"; 

// export default function SearchHospital() {
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [formData, setFormData] = useState({ state: "", city: "" });
//   const navigate = useNavigate();
//   const [stateError, setStateError] = useState(false);
//   const [cityError, setCityError] = useState(false);

//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         const response = await axios.get("https://meddata-backend.onrender.com/states");
//         setStates(response.data);
//       } catch (error) {
//         console.error("Error fetching states:", error);
//       }
//     };
//     fetchStates();
//   }, []);

//   useEffect(() => {
//     const fetchCities = async () => {
//       setCities([]); 
//       setFormData((prev) => ({ ...prev, city: "" })); 
//       if (formData.state) {
//         try {
//           const response = await axios.get(
//             `https://meddata-backend.onrender.com/cities/${formData.state}`
//           );
//           setCities(response.data);
//         } catch (error) {
//           console.error("Error fetching cities:", error);
//         }
//       }
//     };
//     fetchCities();
//   }, [formData.state]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "state") setStateError(false);
//     if (name === "city") setCityError(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;
//     if (!formData.state) {
//       setStateError(true);
//       valid = false;
//     }
//     if (!formData.city) {
//       setCityError(true);
//       valid = false;
//     }

//     if (valid) {
//       navigate(`/search?state=${formData.state}&city=${formData.city}`);
//     }
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         display: "flex",
//         gap: { xs: 2, md: 4 },
//         flexDirection: { xs: "column", md: "row" },
//         justifyContent: "space-between",
//         alignItems: { xs: 'stretch', md: 'center' },
//       }}
//     >
//       <FormControl fullWidth error={stateError}>
//         <Select
//           displayEmpty
//           id="state-select"
//           name="state"
//           value={formData.state}
//           onChange={handleChange}
//           startAdornment={
//             <InputAdornment position="start">
//               <SearchIcon color="action" />
//             </InputAdornment>
//           }
//           sx={{ minWidth: { xs: '100%', md: 200 } }}
//         >
//           <MenuItem disabled value="">
//             State
//           </MenuItem>
//           {states.map((stateOption) => (
//             <MenuItem key={stateOption} value={stateOption}>
//               {stateOption}
//             </MenuItem>
//           ))}
//         </Select>
//         {stateError && <FormHelperText>Please select a state</FormHelperText>}
//       </FormControl>

//       <FormControl fullWidth error={cityError}>
//         <Select
//           displayEmpty
//           id="city-select"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//           disabled={!formData.state || cities.length === 0} 
//           startAdornment={
//             <InputAdornment position="start">
//               <SearchIcon color="action" />
//             </InputAdornment>
//           }
//           sx={{ minWidth: { xs: '100%', md: 200 } }}
//         >
//           <MenuItem disabled value="">
//             City
//           </MenuItem>
//           {cities.map((cityOption) => (
//             <MenuItem key={cityOption} value={cityOption}>
//               {cityOption}
//             </MenuItem>
//           ))}
//         </Select>
//         {cityError && <FormHelperText>Please select a city</FormHelperText>}
//       </FormControl>

//       <Button
//         type="submit"
//         variant="contained"
//         size="large"
//         startIcon={<SearchIcon />}
//         sx={{ py: { xs: 1.5, md: '15px' }, px: { xs: 3, md: 8 }, flexShrink: 0 }}
//         disableElevation
//       >
//         Search
//       </Button>
//     </Box>
//   );
// }