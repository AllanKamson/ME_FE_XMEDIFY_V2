import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
    return (
        <Box py={6}>
            <Container>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Blog & News
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Read Our Latest News
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <BlogCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogCard />
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}



// import { Box, Container, Grid, Typography } from "@mui/material";
// import BlogCard from "./BlogCard";

// export default function Blogs() {
//   // Dummy blog data - replace with actual data fetching in a real application
//   const blogPosts = [
//     {
//       img: "https://placehold.co/400x250/e0f2fe/1e3a8a?text=Health+Tips",
//       title: '6 Tips To Protect Your Mental Health When You\'re Sick',
//       category: 'Medical',
//       date: 'March 31, 2022',
//       author: 'Rebecca Lee',
//       authorImg: "https://placehold.co/32x32/ccc/333?text=RL",
//     },
//     {
//       img: "https://placehold.co/400x250/f0f8ff/1e3a8a?text=Nutrition",
//       title: 'The Importance of a Balanced Diet for Overall Well-being',
//       category: 'Nutrition',
//       date: 'April 10, 2022',
//       author: 'John Davis',
//       authorImg: "https://placehold.co/32x32/ccc/333?text=JD",
//     },
//     {
//       img: "https://placehold.co/400x250/e6f2ff/1e3a8a?text=Fitness",
//       title: 'Simple Exercises You Can Do at Home for Better Health',
//       category: 'Fitness',
//       date: 'April 20, 2022',
//       author: 'Sarah Chen',
//       authorImg: "https://placehold.co/32x32/ccc/333?text=SC",
//     },
//   ];

//   return (
//     <Box py={{ xs: 6, md: 8 }}>
//       <Container maxWidth="xl">
//         <Typography color='primary.main' fontWeight={600} textAlign='center' mb={1.5}>
//           Blog & News
//         </Typography>
//         <Typography textAlign='center' variant='h2' mb={6}>
//           Read Our Latest News
//         </Typography>

//         <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
//           {blogPosts.map((blog, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <BlogCard blog={blog} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }