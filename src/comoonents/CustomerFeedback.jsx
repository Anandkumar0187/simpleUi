import React from "react";
import { Paper, Box, Typography, Avatar, Rating } from "@mui/material";

const feedbackData = [
  {
    name: "Jenny Willsom",
    avatar: "J",
    rating: 5,
    feedback:
      "Amazing service! The team was very professional and exceeded expectations.",
  },
  {
    name: "Jane Smith",
    avatar: "J",
    rating: 4,
    feedback:
      "The food was delicious, and the atmosphere was great. Will visit again!",
  },
  {
    name: "Chris Evans",
    avatar: "C",
    rating: 3,
    feedback: "Service was a bit slow, but the quality of food made up for it.",
  },
  {
    name: "Emily Davis",
    avatar: "E",
    rating: 5,
    feedback: "Everything was perfect! Highly recommend to everyone.",
  },
  {
    name: "Michael Brown",
    avatar: "M",
    rating: 4.5,
    feedback:
      "Great experience overall. The staff was friendly, and the food was top-notch.",
  },
];

const CustomerFeedback = () => {
  return (
    <Paper
      sx={{
        padding: 3,
        backgroundColor: "#20202A",
        color: "white",
        // minHeight: "100px",
        height: 550,
        overflowY: "scroll",
        cursor: "pointer",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, textAlign: "left" }}>
        Customer's Feedback
      </Typography>

      {feedbackData.map((feedback, index) => (
        <Box
          key={index}
          sx={{
            // padding: 1,
            backgroundColor: "#20202A",
            borderBottom: "1px solid gray",
            // borderRadius: "8px",
            // marginBottom: 2,
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 1,
              width: "100%",
            }}
          >
            <Avatar
              sx={{
                width: 30,
                height: 30,
                backgroundColor: "#7295FF",
                marginRight: 2,
              }}
            >
              {feedback.avatar}
            </Avatar>
            <Typography
              variant="p"
              sx={{
                fontWeight: 600,
                flexGrow: 1,
                textAlign: "start",
              }}
            >
              {feedback.name}
            </Typography>
          </Box>

          <Rating
            value={feedback.rating}
            precision={0.5}
            readOnly
            sx={{ marginBottom: 1 }}
          />

          <Typography
            variant="p"
            sx={{
              textAlign: "start",
              color: "#aaa",
              fontStyle: "italic",
            }}
          >
            {`"${feedback.feedback}"`}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default CustomerFeedback;
