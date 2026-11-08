# K5 · L3 · Day 02 — Discovery & Problem Framing

> **Loại bài: Cá nhân + Nhóm.** Một phần làm cá nhân (CP1, CP2, CP7), một phần làm theo nhóm 3–4 người (CP3–CP6). **Mỗi nhóm làm chung một repo do nhóm trưởng fork.** Mỗi học viên vẫn nộp link repo đó trên LMS bằng tài khoản của mình. Xem [SUBMISSION.md](SUBMISSION.md).

Hôm nay bạn chưa xây AI. Hôm nay bạn **tìm đúng bài toán**: đi từ một vấn đề thật quanh mình, vẽ quy trình, viết Problem Statement đủ chặt, kiểm chứng với người thật, rồi mới quyết định có nên dùng AI không. Nếu dùng thì ở mức nào: Rule, Workflow hay Agent. Cuối cùng là kết luận **Go / Not Yet / No-Go**.

Lab này đi theo **nửa đầu của mô hình Double Diamond** (Design Council, UK):

```text
     DISCOVER (mở rộng)              DEFINE (thu hẹp)
   ◇ cá nhân scan rộng  ──────▶  ◇ nhóm hội tụ về 1 Problem Statement
   CP1 → CP2                       CP3 → CP4 → CP5 → CP6
```

Đầu ra cuối cùng là **một Problem Statement đã kiểm chứng và một quyết định có lý do**, chưa phải một sản phẩm. Kết luận "không cần AI" vẫn là một kết luận tốt nếu lập luận chặt.

## Mục tiêu học tập

Sau buổi này, bạn làm được:

1. Mô tả một vấn đề theo **actor, quy trình, bottleneck, metric**, không bắt đầu từ giải pháp (Job Story, Opportunity Solution Tree).
2. Kiểm chứng một vấn đề bằng **bằng chứng về hành vi đã xảy ra**, không dựa vào ý kiến hay lời khen (The Mom Test).
3. Viết **Problem Statement** có success metric đo được, boundary rõ và tiêu chí đánh giá AI (Lean UX, Google PAIR).
4. Chọn đúng mức can thiệp **No AI / Rule / Workflow / Agent** và ra quyết định theo **4 rủi ro** Value, Usability, Feasibility, Viability (Anthropic, Marty Cagan).

## Thông tin chung

| Mục | Nội dung |
|---|---|
| Khóa / level | K5 · Level 3, lớp **L3A** hoặc **L3B** (cùng một đề, khác nhau ở tên repo nộp bài) |
| Ngày học | Day 02 |
| Thời lượng | 4 tiếng (240 phút, gồm 2 lần nghỉ 10 phút) |
| Nhóm | 3–4 người |
| Chuẩn bị | Tài khoản GitHub; một công cụ vẽ quy trình (giấy, Mermaid, Excalidraw hoặc FigJam); một trợ lý AI (ví dụ ChatGPT hoặc Gemini) |
| Code | Không có code. Toàn bộ bài làm là file Markdown và hình ảnh |
| Deadline | Lab sáng: 23h59 GMT+7 ngày lab. Lab chiều/tối: 11h59 GMT+7 ngày hôm sau. Chi tiết trong [SUBMISSION.md](SUBMISSION.md) |

## Bắt đầu

1. **Nhóm trưởng** bấm **Fork** (góc trên bên phải repo này). Ở trang *Create a new fork*, chọn tài khoản GitHub của nhóm trưởng làm **Owner** và sửa ô **Repository name** theo cú pháp:
   ```text
   K5-<L3A hoặc L3B>-DAY02-HoVaTen-MSSV-DiscoveryProblemFraming
   ```

   `HoVaTen-MSSV` là họ tên và MSSV của **nhóm trưởng** (không dấu, không khoảng trắng). Ví dụ nhóm trưởng Nguyễn Văn An, MSSV `20241234`, lớp L3A: `K5-L3A-DAY02-NguyenVanAn-20241234-DiscoveryProblemFraming`.

   Lưu ý khi fork:
   - Nếu lỡ để tên mặc định, vào **Settings → General → Repository name** trong repo fork để đổi tên.
   - Cả nhóm làm bài và commit trên **đúng repo fork này**. Không tạo Pull Request về repo gốc. Không fork thêm repo cá nhân.
   - Nhóm trưởng vào **Settings → Collaborators**, mời các thành viên. Mỗi người chấp nhận lời mời rồi mới commit được.
   - Repo fork có cùng chế độ public/private với repo gốc và không tự đổi được. Nếu fork là private, thêm coach làm collaborator theo hướng dẫn trên LMS.
   - Mỗi thành viên nộp **cùng một link** repo này trên LMS bằng tài khoản của mình. Chi tiết trong [SUBMISSION.md](SUBMISSION.md).
2. Mỗi thành viên tạo **một file báo cáo cá nhân** trong `report/individual/` trên repo chung: copy `MSSV_HoTen.md` thành file mới, đặt tên MSSV và họ tên của mình, ví dụ `report/individual/20241234_NguyenVanAn.md`. Giữ template cho đến khi mọi người đã có file riêng, rồi xóa template. Commit bằng tài khoản GitHub của chính mình. Không viết hộ lẫn nhau.
3. Đọc tài liệu theo thứ tự dưới đây, rồi làm lần lượt từ CP0 đến CP7.

## Thuật ngữ

Lab giữ nguyên một số thuật ngữ tiếng Anh vì đây là từ các team product dùng hằng ngày. Nghĩa trong lab:

| Thuật ngữ | Nghĩa trong lab |
|---|---|
| **Quy trình** | Các bước con người đang làm để xong một việc (quy trình hiện tại, quy trình tương lai). Vẽ ở CP2 và CP5 |
| **Workflow** (viết hoa) | Chỉ dùng cho **một mức can thiệp AI** trong 4 mức No AI / Rule / Workflow / Agent: các bước định sẵn, AI làm một phần. Không dùng để chỉ quy trình làm việc |
| **Problem / pain** | Vấn đề, nỗi đau có thật: tốn thời gian, hay sai, bị than phiền nhiều lần |
| **Candidate (problem)** | Một vấn đề được đề cử để nhóm cân nhắc. Shortlist là danh sách rút gọn các candidate |
| **Bottleneck** | Bước nghẽn: một bước cụ thể trong quy trình làm chậm hoặc làm hỏng cả quy trình |
| **Problem Statement (v0 / v1)** | Bản mô tả bài toán. v0 viết sau CP5, v1 bổ sung mức can thiệp AI ở CP6 |
| **Claim** | Một nhận định cần có nguồn để kiểm chứng |
| **Narrative** | Phần nhận định viết bằng chữ (khác phần số liệu) |
| **Boundary** | Ranh giới: những gì AI không được làm hoặc không được tự quyết |
| **Eval / tiêu chí đánh giá** | Tiêu chí để chấm đầu ra của AI là đạt hay không đạt. Bộ eval là tập ví dụ đầu vào kèm đầu ra mong đợi để chấm theo các tiêu chí đó |

## Thứ tự đọc

| # | File | Đọc để biết |
|---|---|---|
| 1 | [RULES.md](RULES.md) | Được và không được dùng AI ở đâu, quy định nhóm và nộp muộn |
| 2 | [CHECKPOINTS.md](CHECKPOINTS.md) | 8 checkpoint: làm gì, nộp gì, tự kiểm thế nào |
| 3 | [docs/01-worksheet.md](docs/01-worksheet.md) | Hướng dẫn chi tiết, template và prompt mẫu cho từng checkpoint |
| 4 | [docs/02-deliverable-example.md](docs/02-deliverable-example.md) | Một bài làm mẫu hoàn chỉnh |
| 5 | [RUBRIC.md](RUBRIC.md) | Cách chấm 100 điểm và bonus |
| 6 | [SUBMISSION.md](SUBMISSION.md) | Tên repo, cấu trúc, deadline, checklist trước khi nộp |
| — | [docs/03-international-frameworks.md](docs/03-international-frameworks.md) | Các framework quốc tế mà lab sử dụng, kèm nguồn gốc (đọc thêm) |

## Cấu trúc repo

```text
K5-<L3A hoặc L3B>-DAY02-HoVaTen-MSSV-DiscoveryProblemFraming/
├── README.md
├── RULES.md
├── CHECKPOINTS.md
├── RUBRIC.md
├── SUBMISSION.md
├── TEAM.md                          ← điền trên repo chung; mỗi người tự điền phần của mình
├── docs/                            ← worksheet, bài mẫu, framework (chỉ đọc)
├── report/
│   ├── individual/                  ← mỗi thành viên một file, ví dụ 20241234_NguyenVanAn.md
│   ├── team/group_report.md         ← phần NHÓM: CP3 → CP6, một bản trên repo chung
│   └── assets/                      ← ảnh quy trình, Mermaid, ảnh survey, ghi chú phỏng vấn
└── src/                             ← lab này không có code (xem src/README.md)
```

## Lịch buổi lab

| Thời gian | Checkpoint | Làm | Giai đoạn |
|---:|---|---|---|
| 15' | CP0 | Đọc bài mẫu | — |
| 25' | CP1 | Cá nhân scan 5+ problems | Discover |
| 35' | CP2 | Top 3 Problem Cards + quy trình nháp | Discover |
| 10' | — | Nghỉ | |
| 30' | CP3 | Nhóm hội tụ về 1 candidate | Define |
| 30' | CP4 | Kiểm chứng + research giải pháp đã có | Define |
| 45' | CP5 | Quy trình trước/sau + Problem Statement v0 | Define |
| 10' | — | Nghỉ | |
| 25' | CP6 | Rule / Workflow / Agent + Problem Statement v1 + quyết định | Define |
| 15' | CP7 | Reflection cá nhân | — |
