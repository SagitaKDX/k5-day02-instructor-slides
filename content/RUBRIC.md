# Rubric

Tổng điểm chính: **100** (cá nhân 40 + nhóm 60). Bonus ghi riêng, tối đa **10**.

Phần nhóm: cả nhóm nhận cùng một điểm, trừ thành viên không có đóng góp thực tế trong `TEAM.md` (xem quy tắc bên dưới).

## Phần cá nhân — 40 điểm

Người chấm xem file báo cáo cá nhân đã đổi tên theo mẫu `MSSV_HoTen.md`, ví dụ `report/individual/20241234_NguyenVanAn.md`.

| Tiêu chí | CP | Điểm | Bằng chứng | Điều kiện được điểm / bị trừ |
|---|---|---:|---|---|
| C1 — Scan problem | CP1 | 8 | Mục 2: bảng scan | Đủ 5 problem dạng Job Story, mỗi dòng có dấu hiệu thật đo được: 8. Thiếu dấu hiệu thật ở quá nửa số dòng: tối đa 4. Problem là solution trá hình ("cần chatbot…"): trừ 1/dòng. Dưới 5 problem: tối đa 3 |
| C2 — Top 3 Problem Cards + quy trình nháp | CP2 | 10 | Mục 3: 3 card + 3 quy trình | Mỗi card đủ field và quy trình có số phút, bottleneck: 3 điểm/card (tối đa 9). Có ghi lại phản biện của AI và đã sửa gì: 1 điểm (là phần bắt buộc để đạt 10, không phải bonus). Bottleneck mơ hồ ("quy trình chậm"): trừ 1/card |
| C3 — Nhật ký phản biện | CP3 | 6 | Mục 4: bảng tham gia, dòng "Pitch" và "Phản biện" | Ghi được câu hỏi mình đã đặt cho người khác và câu hỏi mình nhận được, kèm thay đổi cụ thể sau đó: 6. Chỉ ghi chung chung "đã góp ý": tối đa 2 |
| C4 — Reflection | CP7 | 10 | Mục 4, mục 5 và mục 6.1–6.6 | Nêu rõ vai trò, có ví dụ đổi ý cụ thể, bảng dùng AI chỉ ra được chỗ AI sai và cách sửa, nói được nếu làm lại sẽ đổi gì: 10. Mục 6.1–6.6 dưới 200 từ (không tính 6.7 và các bảng ở mục 4–5) hoặc chung chung: tối đa 4. Phần reflection do AI viết thay: C4 = 0 |
| C5 — Hiểu bài | CP7 | 6 | Mục 6.7; coach có thể hỏi trực tiếp | Tự giải thích đúng chuỗi problem → quy trình → metric → boundary → mức can thiệp → quyết định cho bài của nhóm: 6. Giải thích sai hoặc thiếu mắt xích: 0–3 |
| **Cộng phần cá nhân** | | **40** | | |

## Phần nhóm — 60 điểm

Người chấm xem file `report/team/group_report.md` trên repo chung của nhóm (một bản duy nhất).

| Tiêu chí | CP | Điểm | Bằng chứng | Điều kiện được điểm / bị trừ |
|---|---|---:|---|---|
| C6 — Hội tụ có lập luận | CP3 | 8 | Mục 2: cluster, cây OST, bảng chấm điểm, lý do chọn/loại | Có cây OST tách đúng opportunity và solution, bảng chấm điểm có lý do, giải thích vì sao loại ít nhất 2 candidate: 8. Chỉ bỏ phiếu không lý do: tối đa 3 |
| C7 — Kiểm chứng + research | CP4 | 10 | Mục 3: assumption map, snapshot/survey, bảng research | Kiểm chứng đúng cách (hỏi hành vi đã xảy ra, không hỏi giả định), có tín hiệu phản bác, research có 2–3 nguồn với link mở được, problem được sửa sau kiểm chứng: 10. Câu hỏi dạng "Bạn có muốn…": trừ 3. Link chết hoặc số liệu không nguồn: trừ 2 |
| C8 — Quy trình trước/sau | CP5 | 12 | Mục 4 + `report/assets/` | Quy trình hiện tại có actor/input/output/thời gian, bottleneck rõ; quy trình tương lai có bước con người kiểm tra, boundary, phương án quay về; có bảng before/after: 12. Thiếu phương án quay về: trừ 3. Thiếu thời gian từng bước: trừ 2 |
| C9 — Problem Statement v0 → v1 | CP5, CP6 | 15 | Mục 5 + mục 7 | Đủ trường; success metric có baseline, target, cách đo; boundary ghi rõ AI không được làm gì; có 3–5 tiêu chí đánh giá; v1 khác v0 và có lý do: 15. Metric không đo được: trừ 5. Không có tiêu chí đánh giá: trừ 3. Nhóm chọn No AI hoặc Rule: tiêu chí đánh giá viết cho giải pháp không dùng AI, trường "AI intervention point" ghi "Không có" kèm lý do |
| C10 — Mức can thiệp AI | CP6 | 8 | Mục 6: ma trận, bảng No AI/Rule/Workflow/Agent, AI Canvas, câu hỏi PAIR | Lập luận rõ vì sao không chọn mức đơn giản hơn, AI Canvas chỉ ra đúng dữ liệu cần có: 8. Chọn Agent mà không giải thích vì sao Workflow không đủ: tối đa 3. Nếu chọn No AI hoặc Rule: không cần AI Canvas và câu hỏi PAIR; chấm theo lập luận vì sao mức đó đủ và vì sao không cần mức cao hơn (xem worksheet CP6) |
| C11 — Quyết định | CP6 | 7 | Mục 8: 4 rủi ro + quyết định + ngưỡng dừng | Đánh giá đủ 4 rủi ro có lý do, quyết định nhất quán với rủi ro, có ngưỡng dừng đo được và bước tiếp theo cụ thể: 7. Không có ngưỡng dừng: trừ 2 |
| **Cộng phần nhóm** | | **60** | | |

**Tổng điểm chính: 40 + 60 = 100.**

## Bonus — tối đa 10 điểm (ghi riêng)

Bonus là điểm cộng cho **chất lượng bài lab**, không phải điểm phát biểu, giơ tay hay pitching.

| Bonus | Điểm | Bằng chứng |
|---|---:|---|
| B1 — Scan rộng mà vẫn cụ thể: từ 10 problem trở lên, trải đủ 4 lăng kính, mỗi dòng có dấu hiệu thật. Ý do AI gợi ý được tính nếu bạn đã tự viết lại theo trải nghiệm thật, có dấu hiệu thật của chính bạn và có ghi rõ là ý từ AI | +3 | Báo cáo cá nhân mục 2 |
| B2 — Kiểm chứng vượt yêu cầu: từ 5 interview snapshot trở lên hoặc survey từ 20 người trở lên, **và** kết quả làm nhóm sửa problem, metric hoặc quyết định | +4 | Báo cáo nhóm mục 3, phần "Nhóm đã sửa gì" |
| B3 — Bộ eval mẫu: 10 cặp input/đầu ra mong đợi cho bước AI, mỗi cặp chấm theo tiêu chí đánh giá của nhóm | +3 | Báo cáo nhóm mục 7 hoặc file trong `report/assets/` |

## Quy tắc chấm

- Điểm chính tối đa 100. Bonus không tự cộng vào điểm chính và tối đa 10.
- Chấm theo commit cuối cùng trước deadline (hoặc trước hạn gia hạn, nếu được gia hạn). Commit sau mốc này không được chấm; không có mức trừ điểm nộp muộn.
- **Sai tên repo hoặc sai tên file báo cáo**: trừ 5 điểm. Repo theo mẫu `K5-<L3A hoặc L3B>-DAY02-HoVaTen-MSSV-DiscoveryProblemFraming`, trong đó `HoVaTen-MSSV` là của nhóm trưởng. File báo cáo cá nhân theo mẫu `MSSV_HoTen.md`, ví dụ `20241234_NguyenVanAn.md`. Giữ nguyên tên `MSSV_HoTen.md` (chưa đổi) cũng tính là sai.
- **Thiếu `report/team/group_report.md` hoặc `TEAM.md` trong repo nhóm**: phần nhóm bị 0.
- **Thành viên không nộp link repo nhóm trên LMS** bằng tài khoản của mình: không có bài để chấm.
- **Không có đóng góp trong `TEAM.md`** hoặc các thành viên khác xác nhận không tham gia: phần nhóm của người đó bị 0.
- **Bịa kết quả phỏng vấn/survey**: C7 bị 0 cho cả nhóm.
- **Báo cáo cá nhân trùng lặp đáng kể với người khác**, hoặc **phần lớn báo cáo cá nhân do AI viết thay** (cả scan, Problem Card và reflection): phần cá nhân bị 0. Nếu chỉ phần reflection do AI viết thay thì áp dụng C4 = 0, các tiêu chí khác chấm bình thường.
- Commit API key, password hoặc thông tin cá nhân của người được phỏng vấn: trừ 5 điểm.
