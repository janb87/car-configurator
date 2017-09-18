export function loadHomePage(callback) {
    System.import('../containers/HomePage').then(callback);
}

export function loadSummaryPage(callback) {
    System.import('../containers/SummaryPage').then(callback);
}
