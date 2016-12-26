//
// QueueList styles

import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	container: {
		backgroundColor: '#eaeaea',
		flex: 1,
    zIndex: 9999,
    marginTop: 21,
    borderTopColor: '#eaeaea',
    borderTopWidth: 1
	},
	backTextWhite: {
		color: '#FFF'
	},
	rowFront: {
		backgroundColor: 'white',
		alignItems: 'flex-start',
    paddingLeft: 20,
    marginBottom: 1,
    paddingRight: 20,
		justifyContent: 'center',
		height: 50,
	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: '#eaeaea',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	},
	backRightBtn: {
		alignItems: 'center',
    marginBottom: 1,
    marginTop: -1,
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 75
	},
	backRightBtnLeft: {
		backgroundColor: 'blue',
		right: 75
	},
	backRightBtnRight: {
		backgroundColor: 'red',
		right: 0
	},
	controls: {
		alignItems: 'center',
		marginBottom: 30
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 5
	},
	switch: {
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		paddingVertical: 10,
		width: 100,
	}
});
