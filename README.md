# Carebot - AI-powered Health Assistant
Carebot is a full-stack web application designed to solve the problem of nurse shortages and the slow pace of healthcare in Canada. By automating health check-ins and providing an efficient and cost-effective way for users to stay in check with their health, Carebot helps bridge the gap in the healthcare system.

## Key Features:
- AI-powered Health Check-ins: Using the OpenAI API, Carebot leverages AI to collect and assess users' health status through conversational check-ins.
- User Authentication: Users can securely log in and manage their health data using Firebase Authentication.
- Real-time Data Storage: Health data and responses are stored in Firestore for easy access and management.
- Interactive Frontend: Built with Next.js, providing a responsive, modern, and fast user interface.
- Backend Communication: Axios is used to handle communication between the frontend and the backend, ensuring seamless interaction with the AI model and storage.

## Tech Stack:
- Frontend: Next.js, React
- Backend: Node.js, OpenAI API, Firebase Authentication, Firestore
- API Communication: Axios
- Deployment: Vercel for hosting

## How It Works:
- Health Check-in Workflow: Users answer a series of health-related questions powered by the OpenAI API. Based on their responses, the AI provides feedback and advice, helping them monitor their health in a timely manner.
- Data Management: Responses are saved securely to Firestore, allowing users to access past health check-ins and monitor their progress over time.

## Future Enhancements:
- Integration with additional health data sources (e.g., wearables).
- Advanced AI-driven recommendations for personalized health advice.
- Expansion of the app to cover broader health concerns and more personalized check-in workflows.
