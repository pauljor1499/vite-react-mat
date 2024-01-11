import dayjs from "dayjs";

var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);
var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);
var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);

function doSchedulesConflict(schedule, newSchedule) {
  const day1 = schedule.day;
  const start1 = dayjs(schedule.time_start, "hh:mm A");
  const end1 = dayjs(schedule.time_end, "hh:mm A");

  const day2 = newSchedule.day;
  const start2 = dayjs(newSchedule.time_start, "hh:mm A");
  const end2 = dayjs(newSchedule.time_end, "hh:mm A");

  // Check for conflicts in terms of day and time
  const isDayConflict = day1 === day2;
  const isTimeConflict =
    (start1.isBefore(end2) && end1.isAfter(start2)) ||
    (start2.isBefore(end1) && end2.isAfter(start1));

  return isDayConflict && isTimeConflict;
}

function hasConflictingSchedules(existingSchedules, newSchedule) {
  for (const schedule of existingSchedules) {
    if (doSchedulesConflict(schedule, newSchedule)) {
      return true; // Return true on the first conflicting schedule found
    }
  }

  return false; // No conflicts found
}

export { doSchedulesConflict };

export default hasConflictingSchedules;
