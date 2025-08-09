

function useFaDate(date: string) {
    if (!date) return { faDate: 'تاریخ نامعتبر' };

    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return { faDate: 'تاریخ نامعتبر' };

    const options : Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };
    const formatter = new Intl.DateTimeFormat('fa-IR', options);

    const faDate = formatter.format(dateObj);
    return { faDate };
}

export default useFaDate