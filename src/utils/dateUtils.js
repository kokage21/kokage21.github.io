// 投稿日が「今日から何日以内か」を判定する関数
export const isNewPost = (dateString, daysThreshold = 7) => {
    // 投稿日データがない場合は false
    if (!dateString) return false;

    // 1. 投稿日の文字列（例："2025.11.22"）を日付データに変換
    // （"."を"-"に置換して、JavaScriptが理解しやすい形式にします）
    const postDate = new Date(dateString.replace(/\./g, '-'));

    // 2. 今日の日付を取得
    const today = new Date();

    // 時刻の影響をなくすため、今日の0時0分0秒に設定
    today.setHours(0, 0, 0, 0);

    // 3. 差分を計算（ミリ秒単位）
    const diffTime = today - postDate;

    // 4. ミリ秒を日数に変換
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    // 差分が「指定した日数（デフォルト7日）」以内なら true を返す
    return diffDays >= 0 && diffDays <= daysThreshold;
};