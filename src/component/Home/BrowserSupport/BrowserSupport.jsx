import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const data = [
  {
    title: "Science",
    subtitle:
      "Science is a process of discovery that involves testing ideas and communicating with others. It may yield knowledge, provide solutions to problems.",
    icon: "test.png",
  },
  {
    title: "Commerce",
    subtitle:
      "Commerce is a field for students who have an interest in financial information/transactions, trading of economic value.",
    icon: "online.png",
  },
  {
    title: "Arts",
    subtitle:
      "The arts provide many opportunities for students to demonstrate their skills through authentic performance.",
    icon: "book.png",
  },
  {
    title: "Media",
    subtitle:
      "Social media allows students to express in many ways, like by posting photos, blogs, individual articles, videos, audio clips etc.",
    icon: "bullhorn.png",
  },
];

const BrowserSupport = () => {
    return (
        <Box p={2} mb={2}>
            <Box marginBottom={4} textAlign={'center'}>
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'medium',
                    }}
                    gutterBottom
                    color={'secondary'}
                >
                    What do you like more ?
                </Typography>
                <Typography fontWeight={700} variant={'h4'}>
                    Which Subject Interests You the Most ?
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {data.map((item, i) => (
                    <Grid item xs={12} md={3} key={i}>
                        <Box
                            width={1}
                            height={1}
                            data-aos={'fade-up'}
                            data-aos-delay={i * 200}
                            data-aos-offset={200}
                            data-aos-duration={700}
                        >
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                            >
                                <Box
                                    component={Avatar}
                                    width={80}
                                    height={80}
                                    marginBottom={2}
                                    src={item.icon}
                                />
                                <Typography
                                    variant={'h6'}
                                    gutterBottom
                                    fontWeight={500}
                                    align={'center'}
                                >
                                    {item.title}
                                </Typography>
                                <Typography align={'center'} color="text.secondary">
                                    {item.subtitle}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default BrowserSupport
