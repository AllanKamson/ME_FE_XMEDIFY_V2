import { Box, Stack, Typography } from "@mui/material";
import featured from '../../../assets/featured.png'
import person from '../../../assets/person.png'

export default function BlogCard() {
    return (
        <Box border='1px solid rgba(0,0,0,0.1)' borderRadius={2}>
            <Box
                component='img'
                src={featured}
                width={1}
            />
            <Box p={2}>
                <Typography color='#77829D' fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
                    Medical | March 31, 2022
                </Typography>
                <Typography component='h3' color='#1B3C74' fontSize={{ xs: 14, md: 18 }} fontWeight={500} lineHeight={1.2} mb={2}>
                    6 Tips To Protect Your Mental Health When You're Sick
                </Typography>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Box
                        component='img'
                        src={person}
                        height={32}
                        width={32}
                    />
                    <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>
                        Rebecca Lee
                    </Typography>
                </Stack>
            </Box>
        </Box>
    )
}



// import { Box, Stack, Typography } from "@mui/material";
// import featured from '../../../assets/featured.png';
// import person from '../../../assets/person.png';

// export default function BlogCard({ blog }) {
//   return (
//     <Box
//       sx={{
//         border: '1px solid rgba(0,0,0,0.1)',
//         borderRadius: 2,
//         overflow: 'hidden', 
//         boxShadow: 1, 
//         transition: 'all 0.3s ease-in-out',
//         '&:hover': {
//           boxShadow: 6, 
//           transform: 'translateY(-5px)', 
//         },
//       }}
//     >
//       <Box
//         component='img'
//         src={blog.img || featured}
//         alt={blog.title}
//         sx={{
//           width: 1,
//           height: { xs: 200, md: 250 }, 
//           objectFit: 'cover',
//           borderBottom: '1px solid rgba(0,0,0,0.1)',
//         }}
//       />
//       <Box p={2}>
//         <Typography color='#77829D' fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
//           {blog.category} | {blog.date}
//         </Typography>
//         <Typography
//           component='h3'
//           color='#1B3C74'
//           fontSize={{ xs: 16, md: 18 }}
//           fontWeight={600} 
//           lineHeight={1.4}
//           mb={2}
//           sx={{ minHeight: { xs: '3em', md: '3.6em' } }} 
//         >
//           {blog.title}
//         </Typography>
//         <Stack direction='row' spacing={1} alignItems='center'>
//           <Box
//             component='img'
//             src={blog.authorImg || person}
//             alt={blog.author}
//             sx={{ height: 32, width: 32, borderRadius: '50%', objectFit: 'cover' }}
//           />
//           <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }} fontWeight={500}>
//             {blog.author}
//           </Typography>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }