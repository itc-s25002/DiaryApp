# DiaryApp

日記を作成・管理できるWebアプリです。日々の出来事を記録し、過去の日記を閲覧したり、編集・削除したりすることができます。

## 主な機能

### 一覧表示
- トップページに今まで書いた日記のタイトルと作成日時を表示する
- ボタンから日記の削除ができる

### 新規作成
- タイトルと今日あった出来事を入力できる

### 編集
- 作成した日記の内容を編集できる

### 削除
- 日記を削除できる
- 削除前にダイアログを表示する

## 画面構成

| URL | 機能 | 説明 |
|---|---|---|
| `/` | 日記一覧 | 日記の一覧表示、削除 |
| `/createDiary` | 日記作成 | 日記の新規作成 |
| `/diarys/[id]` | 日記詳細 | 指定した日記の詳細表示 |
| `/editDiary/[id]` | 日記編集 | 指定した日記の編集 |

※ `[id]` はデータベースにある日記のIDを表します。

## ディレクトリ構成

```text
diaryapp/
├── _components/
│   ├── CreateDiary/
│   │   ├── index.module.css    # 日記作成ボタン用のスタイル
│   │   └── index.tsx           # 日記作成フォームの送信ボタン（送信中ステータス制御）
│   ├── DeleteDiary/
│   │   └── index.tsx           # 日記削除ボタン（確認ダイアログ表示と削除処理の呼び出し）
│   ├── DiaryList/
│   │   ├── index.module.css    # 日記一覧表示用のスタイル
│   │   └── index.tsx           # 日記一覧コンポーネント（Supabaseから一覧を取得・表示）
│   └── EditDiary/
│       └── index.tsx           # 日記編集フォームの保存ボタン（送信中ステータス制御）
├── _libs/
│   └── microcms.ts             # 日記データの共通型定義（Diary型など）
├── action/
│   ├── createDiary.ts          # 日記を新規作成するサーバーアクション（SupabaseへのINSERT）
│   ├── deleteDiary.ts          # 日記を削除するサーバーアクション（SupabaseからのDELETE）
│   └── editDiarys.ts           # 日記を更新するサーバーアクション（SupabaseへのUPDATE）
├── app/
│   ├── createDiary/
│   │   ├── page.module.css     # 日記作成ページ用のスタイル
│   │   └── page.tsx            # 日記作成ページ（入力フォームと作成処理の呼び出し）
│   ├── diarys/
│   │   └── [id]/
│   │       └── page.tsx        # 日記詳細ページ（指定IDの日記データを取得・表示）
│   ├── editDiary/
│   │   └── [id]/
│   │       ├── editform.tsx    # 日記編集フォーム（既存データの初期値設定と更新処理）
│   │       └── page.tsx        # 日記編集ページ（指定IDの日記データを取得して編集フォームへ渡す）
│   ├── favicon.ico             # ブラウザタブに表示されるアイコン（ファビコン）
│   ├── globals.css             # アプリ全体の共通スタイル（Tailwind CSSや全域設定）
│   ├── layout.tsx              # アプリ全体の共通レイアウト（HTML骨組み・フォント等の設定）
│   ├── page.module.css         # トップページ用のスタイル
│   └── page.tsx                # トップページ（メインビジュアル・メニュー・日記一覧の表示）

```

## データベース設計（概要）

### diaries テーブル

| カラム名 | データ型 | 説明 |
|---|---|---|
| `id` | INT | 日記ID（主キー） |
| `title` | VARCHAR(255) | タイトル |
| `content` | TEXT | 本文 |
| `created_at` | DATETIME | 作成日時 |
