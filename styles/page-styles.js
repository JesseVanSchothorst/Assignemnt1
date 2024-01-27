import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// Both
	page: {
		flex: 1,
        alignItems: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
        backgroundColor: '#FFFFF0',
		padding: 5,

	},

    // Index
    titlePage: {
        justifyContent: 'center',
		alignItems: 'center',
        alignSelf: 'stretch',
    },
    title: {
        fontSize: 92,
        marginBottom:5,
        color: '#FDDA0D',
		fontWeight: 'bold',        
    },
    instructions: {
        fontSize: 20,
    },


    inputBoxes: {
        marginTop: 10,
        justifyContent: 'center',
		alignItems: 'center',
        alignSelf: 'stretch',
    },
    input: {
        width: '80%',
		margin: 5,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 5,
		padding: 10,
		fontSize: 20,
    },


    buttonPage: {
        justifyContent: 'center',
		alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 10,
    },
    button: {
        textAlign: 'center',
		backgroundColor: '#3498db',
        width: "40%",   
		padding: 10,
		borderRadius: 10,
        margin: 5,    
	},
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
	},

    // Story
    backHeader: {
		alignItems: 'start',
        alignSelf: 'stretch',
        flex: 1,
    },
    backButton: {
		fontSize: 26,
		color: 'blue',
	},

	madlibHeader: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',        
	},

    madTitle: {
        flex: 9,
        alignItems: 'center',   
    },

    madlibSection: {
        flex: 9,
        alignSelf: 'stretch',
        flexDirection: 'row',
     
	},
    madlibHallpass: {
        width:'30%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'visible',
    },
    hallpassText: {
        fontSize: 120,
        fontWeight: 'bold',
        textAlign: 'center',
        // so dumb :( took so long could be any value but if not set makes the text take width of the container
        width: 600,
    },


    madlibStory: {
        flex: 4,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
	storyTextWrapper: {
        flex: 4,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center', // Add this line

	},
    storyText: {
        textAlign: 'center',
		fontSize: 30,
        marginHorizontal: 10,
        lineHeight: 60,
	},
	signBox: {
        alignSelf: 'stretch',
        flex: 1,
		paddingBottom: 30,
		borderWidth: 2,
        marginBottom: 85,
	},

    dateText: {
        margin: 20,
        fontSize: 20,
    },






    


});

export default styles;