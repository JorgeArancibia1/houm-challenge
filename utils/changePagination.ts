const changePagination = (num: number, setFrom) => {
	if (num === 1) {
		setFrom(0);
	}
	if (num === 2) {
		setFrom(10);
	}
	if (num === 3) {
		setFrom(20);
	}
	if (num === 4) {
		setFrom(30);
	}
	if (num === 5) {
		setFrom(40);
	}
};

export default changePagination;
