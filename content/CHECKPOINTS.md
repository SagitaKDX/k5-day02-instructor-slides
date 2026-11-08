# Checkpoints

Mỗi checkpoint có template và prompt mẫu tương ứng trong [docs/01-worksheet.md](docs/01-worksheet.md). Bài làm mẫu cho từng checkpoint nằm trong [docs/02-deliverable-example.md](docs/02-deliverable-example.md).

| CP | Tên | Ai làm | Thời gian | Ghi vào |
|---|---|---|---:|---|
| CP0 | Đọc bài mẫu | Cá nhân | 15' | — |
| CP1 | Scan 5+ problems | Cá nhân | 25' | `report/individual/MSSV_HoTen.md` mục 2 |
| CP2 | Top 3 Problem Cards + quy trình nháp | Cá nhân | 35' | `report/individual/MSSV_HoTen.md` mục 3 |
| CP3 | Hội tụ nhóm | Nhóm | 30' | `report/team/group_report.md` mục 2 |
| CP4 | Kiểm chứng + research giải pháp đã có | Nhóm | 30' | `report/team/group_report.md` mục 3 |
| CP5 | Quy trình trước/sau + Problem Statement v0 | Nhóm | 45' | `report/team/group_report.md` mục 4–5 |
| CP6 | Mức can thiệp AI + Problem Statement v1 + quyết định | Nhóm | 25' | `report/team/group_report.md` mục 6–8 |
| CP7 | Reflection | Cá nhân | 15' | `report/individual/MSSV_HoTen.md` mục 4–6 |

---

## CP0 — Đọc bài mẫu

- **Mục tiêu:** Nhìn thấy đầu ra cuối cùng trông thế nào trước khi bắt đầu.
- **Cần làm:** Đọc [docs/02-deliverable-example.md](docs/02-deliverable-example.md). Nếu không kịp đọc hết trong 15 phút, đọc kỹ phần nhóm mục 2, 3, 7 và 8; phần còn lại mở lại khi làm checkpoint tương ứng. Chú ý cách nhóm mẫu hội tụ từ 12 candidate về 1, cách research giải pháp có sẵn làm nhóm đổi kết luận, và Problem Statement v0 khác v1 ở đâu.
- **Sản phẩm:** Không nộp.
- **Cần hiểu:** Nhóm chỉ chọn **candidate problem** ở CP3. Problem Statement chỉ được viết sau khi đã kiểm chứng (CP4) và vẽ quy trình (CP5).
- **Tự kiểm tra:** Bạn nói được trong 1 câu vì sao nhóm mẫu quyết định "Go, phạm vi nhỏ" (dùng công cụ có sẵn trong một quy trình bán thủ công) mà không tự xây agent.

## CP1 — Scan 5+ problems (Discover)

- **Mục tiêu:** Mở rộng tối đa trước khi thu hẹp. Tìm ít nhất 5 problem từ trải nghiệm thật của bạn.
- **Cần làm:**
  1. Tự scan trước, chưa dùng AI. Dùng 4 lăng kính: **Lặp lại**, **Tốn thời gian**, **Cần đọc, tổng hợp nhiều thông tin**, **Pain từ người khác**.
  2. Viết mỗi problem theo mẫu **Job Story**: *Khi [tình huống], tôi muốn [động cơ], để [kết quả]*.
  3. Ghi **dấu hiệu thật** cho từng problem: mất bao lâu, mấy lần/tuần, bao nhiêu người gặp, có log/ticket/tin nhắn nào chứng minh.
  4. Sau đó mới hỏi AI gợi ý thêm (nếu muốn), và ghi lại ý nào bị bỏ vì sao.
- **Sản phẩm:** Bảng scan có ít nhất 5 dòng trong báo cáo cá nhân, mục 2.
- **Cần hiểu:** Khác nhau giữa *problem* ("tốn 90 phút mỗi tuần viết báo cáo") và *solution trá hình* ("thiếu một chatbot viết báo cáo").
- **Tự kiểm tra:**
  - [ ] Có ít nhất 5 problem, mỗi problem viết dạng Job Story.
  - [ ] Không dòng nào có chữ "AI", "chatbot", "agent" trong cột Job Story (kể cả dòng thuộc lăng kính "Cần đọc, tổng hợp nhiều thông tin": mô tả việc khó, chưa nói cách giải).
  - [ ] Mỗi dòng có ít nhất 1 dấu hiệu thật đo được (thời gian, tần suất, số người).

## CP2 — Top 3 Problem Cards + quy trình nháp (Discover)

- **Mục tiêu:** Chọn 3 problem tốt nhất và chuẩn bị đủ để pitch với nhóm.
- **Cần làm:**
  1. Chọn top 3 theo tiêu chí: actor rõ, quy trình vẽ được, bottleneck cụ thể, impact đo được, vừa sức một buổi lab.
  2. Viết **Problem Card** cho từng problem (template trong worksheet).
  3. Vẽ **quy trình nháp hiện tại** cho từng problem: 3–7 bước, đánh dấu bước nghẽn và số phút.
  4. Chọn 1 card muốn pitch nhất và viết sẵn 1 câu hỏi muốn nhóm phản biện.
- **Sản phẩm:** 3 Problem Card và 3 quy trình nháp (ASCII, Mermaid hoặc ảnh trong `report/assets/`) trong báo cáo cá nhân, mục 3.
- **Cần hiểu:** Bottleneck là **một bước cụ thể** trong quy trình, không phải cảm giác chung chung "quy trình chậm".
- **Tự kiểm tra:**
  - [ ] Mỗi card có đủ: Job Story, actor, quy trình, bottleneck, impact, success metric, phương án không dùng AI.
  - [ ] Mỗi quy trình có số phút cho từng bước và đánh dấu bước nghẽn.
  - [ ] Đã đưa card cho AI đóng vai "PM hoài nghi" phản biện và sửa ít nhất 1 điểm.

---

*Nghỉ 10 phút.*

---

## CP3 — Hội tụ nhóm (Define)

- **Mục tiêu:** Từ 9–12 candidate của cả nhóm, chọn ra **1 candidate problem** bằng lập luận, không bằng bỏ phiếu ngay.
- **Cần làm:**
  1. **Pitch:** mỗi người trình bày top 3, mỗi card 1–2 phút. Người nghe ghi câu hỏi phản biện. *Không dùng AI ở bước này.*
  2. **Gom nhóm:** gom các candidate trùng hoặc cùng pattern thành cluster.
  3. **Opportunity Solution Tree rút gọn:** viết 1 outcome chung mà nhóm muốn cải thiện, xếp các cluster thành các *opportunity* (pain) bên dưới. Gạch bỏ mọi thứ là *solution* đang đội lốt opportunity.
  4. **Chấm điểm:** chấm 1–5 trên 7 tiêu chí cho shortlist 3 candidate, rồi thảo luận để chốt.
- **Sản phẩm:** Báo cáo nhóm mục 2: bảng pitch, bảng cluster, cây OST, bảng chấm điểm, candidate được chọn và lý do loại các candidate khác.
- **Cần hiểu:** Opportunity là nhu cầu hoặc pain của người dùng. Solution là cách mình đáp ứng nó. Trộn lẫn hai thứ này là lỗi phổ biến nhất ở giai đoạn Define.
- **Tự kiểm tra:**
  - [ ] Cây OST có đúng 1 outcome ở gốc, các nhánh là pain, không có tên công cụ hay tính năng.
  - [ ] Có ghi lý do loại ít nhất 2 candidate khác.
  - [ ] Mỗi thành viên có ít nhất 1 câu hỏi phản biện được ghi trong bảng pitch.

## CP4 — Kiểm chứng + research giải pháp đã có (Define)

- **Mục tiêu:** Kiểm tra pain có thật không, người khác có gặp không, và thế giới đã giải bài này đến đâu.
- **Cần làm:**
  1. **Liệt kê giả định (Assumption Map):** viết 4–6 giả định quan trọng nhất của nhóm, xếp theo 2 trục *quan trọng* và *đã có bằng chứng*. Kiểm chứng giả định ở ô "quan trọng nhưng ít bằng chứng" trước.
  2. **Kiểm chứng**, chọn ít nhất 1 cách:
     - Phỏng vấn nhanh **2–3 người** (bạn học ở nhóm khác cũng được nếu họ thật sự gặp vấn đề này; có thể phỏng vấn trước buổi học) theo 3 luật của **The Mom Test**: hỏi về cuộc sống của họ chứ không hỏi về ý tưởng của mình; hỏi về hành vi cụ thể đã xảy ra chứ không hỏi giả định; nói ít hơn người được hỏi. Ghi mỗi buổi thành 1 **Interview Snapshot**.
     - Hoặc micro survey / poll **5–10 người**.
  3. **Research giải pháp đã có:** tìm 2–3 công cụ, case hoặc pattern đã giải bài tương tự, có link đã tự mở và kiểm. Ghi họ giải bước nào trong quy trình và còn bỏ trống bước nào.
- **Sản phẩm:** Báo cáo nhóm mục 3: assumption map, interview snapshot hoặc kết quả survey, bảng research có link, và nhóm đã sửa problem thế nào sau kiểm chứng.
- **Cần hiểu:** Lời khen ("ý hay đấy!") không phải bằng chứng. Hành vi đã xảy ra và cam kết (thời gian, tiền, hành động tiếp theo) mới là bằng chứng.
- **Tự kiểm tra:**
  - [ ] Không câu hỏi phỏng vấn nào bắt đầu bằng "Bạn có muốn…" hay "Bạn có dùng… không nếu…".
  - [ ] Có ít nhất 1 tín hiệu **phản bác** được ghi lại, kể cả khi nhỏ.
  - [ ] Mọi link trong bảng research đều mở được và đúng nội dung được trích.

## CP5 — Quy trình trước/sau + Problem Statement v0 (Define)

- **Mục tiêu:** Vẽ quy trình đủ chi tiết để thấy chính xác AI (nếu có) chen vào đâu, và viết bản Problem Statement đầu tiên.
- **Cần làm:**
  1. **Quy trình hiện tại:** mỗi bước có actor, input, output, thời gian/tần suất. Đánh dấu bottleneck chính.
  2. **Quy trình tương lai:** ghi rõ bước nào Rule xử lý, bước nào AI hỗ trợ, bước nào con người vẫn làm, **boundary** ở đâu và **phương án quay về** nếu AI sai.
  3. Bảng **before/after**: số bước, tổng thời gian, số bước thủ công, rủi ro mới phát sinh.
  4. **Problem Statement v0** gồm 6 trường: Actor, Quy trình, Bottleneck, Impact, Success Metric, Boundary.
  5. Nhờ AI phản biện Problem Statement v0 (chỉ hỏi lỗ hổng, không để AI viết lại).
- **Sản phẩm:** Báo cáo nhóm mục 4 (quy trình) và mục 5 (Problem Statement v0). Ảnh hoặc file Mermaid đặt trong `report/assets/`.
- **Cần hiểu:** Success Metric phải có **baseline** (hiện tại là bao nhiêu), **target** (muốn đạt bao nhiêu) và **cách đo**. "Nhanh hơn", "tiện hơn" không phải metric.
- **Tự kiểm tra:**
  - [ ] Quy trình tương lai có ít nhất 1 bước con người kiểm tra và 1 phương án quay về.
  - [ ] Success Metric có baseline, target và cách đo.
  - [ ] Boundary ghi rõ AI **không** được làm gì và khi nào cần con người kiểm tra (HITL — human-in-the-loop).

---

*Nghỉ 10 phút.*

---

## CP6 — Mức can thiệp AI + Problem Statement v1 + quyết định (Define)

- **Mục tiêu:** Chọn mức can thiệp đơn giản nhất đủ dùng và ra quyết định Go / Not Yet / No-Go có lý do.
- **Cần làm:**
  1. Đặt bài toán vào **ma trận độ mơ hồ × độ phức tạp**.
  2. So sánh 4 mức **No AI / Rule / Workflow / Agent** cho bài của nhóm. Trả lời: vì sao không chọn mức đơn giản hơn?
  3. Điền **AI Canvas rút gọn**: AI dự đoán gì, con người cân nhắc gì, hành động là gì, đo kết quả bằng gì (Outcome), cần dữ liệu đầu vào gì, phản hồi để cải thiện lấy từ đâu.
  4. Trả lời 2 câu của Google PAIR: người dùng muốn **được hỗ trợ (augment)** hay **giao hẳn việc (automate)**? AI sai kiểu nào tệ hơn: **báo nhầm** hay **bỏ sót**?
  5. Viết **3–5 tiêu chí đánh giá** (eval) cho đầu ra của AI: thế nào là "đạt", thế nào là "không đạt".
  6. Viết **Problem Statement v1** (thêm AI intervention point, mức chọn, rủi ro và người kiểm tra).
  7. Chấm **mức độ rủi ro** cho 4 rủi ro Value / Usability / Feasibility / Viability (Thấp = an toàn, Cao = nguy hiểm), rồi ra quyết định **Go / Not Yet / No-Go** kèm **ngưỡng dừng** ("nếu sau X tuần mà Y thì quay về Z").
- **Sản phẩm:** Báo cáo nhóm mục 6 (mức can thiệp), 7 (Problem Statement v1), 8 (quyết định).
- **Cần hiểu:** Workflow là các bước đã định sẵn mà AI chỉ làm một phần. Agent là khi AI **tự quyết bước tiếp theo**. Đa số bài toán ở lab này chỉ cần Rule hoặc Workflow.
- **Tự kiểm tra:**
  - [ ] Có câu trả lời rõ cho "vì sao không chọn mức đơn giản hơn".
  - [ ] Mỗi rủi ro trong 4 rủi ro có mức độ rủi ro Thấp / Trung bình / Cao (Thấp = an toàn) và lý do.
  - [ ] Quyết định có ngưỡng dừng đo được.
  - [ ] Problem Statement v1 khác Problem Statement v0 ở ít nhất 1 trường, và có ghi vì sao đổi.

## CP7 — Reflection cá nhân

- **Mục tiêu:** Nhìn lại vai trò của mình trong nhóm và cách mình dùng AI.
- **Cần làm:**
  1. Điền bảng "Tôi đã tham gia phần nào" (mục 4 báo cáo cá nhân).
  2. Điền bảng "Dùng AI" (mục 5): AI giúp ở đâu, sai ở đâu, bạn sửa gì.
  3. Trả lời các câu hỏi mở (mục 6), tối thiểu 200 từ, bằng trải nghiệm thật.
  4. Điền phần của bạn trong `TEAM.md`.
- **Sản phẩm:** Báo cáo cá nhân mục 4–6 và phần của bạn trong `TEAM.md`.
- **Cần hiểu:** Tự giải thích được chuỗi problem → quy trình → metric → boundary → mức can thiệp AI → quyết định cho bài của nhóm, không cần nhìn tài liệu.
- **Tự kiểm tra:**
  - [ ] Có ít nhất 1 ví dụ cụ thể bạn đã đổi ý sau khi bị phản biện, hoặc đã phản biện làm nhóm đổi ý.
  - [ ] Có ít nhất 1 chỗ AI sai hoặc hời hợt và bạn đã sửa thế nào.
  - [ ] Reflection không do AI viết.
